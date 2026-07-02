import {Cairo} from "next/font/google";
import"./globals.css";
import { AppRouterCacheProvider } from '@mui/material-nextjs/v15-appRouter';
import { ThemeProvider } from '@mui/material/styles';
import theme from "@/theme";
import { CssBaseline } from '@mui/material';
import Home from "./page";
import ToastProvider from "./ToastProvider";
import MuiThemeProvider from "./MuiThemeProvider";


const cairoFont = Cairo({
  variable: "--font-cairo",
  subsets: ["arabic"],
});


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl" className={cairoFont.variable}>
      <body>
        

            <AppRouterCacheProvider>
                
                  <MuiThemeProvider>

                    <CssBaseline />
                    
                    <ToastProvider /> 

                    <ThemeProvider theme={theme}> 
                            {children}
                    </ThemeProvider>
                    
                  </MuiThemeProvider>

                
                
            </AppRouterCacheProvider>

      </body>
    </html>
  );

  
}
