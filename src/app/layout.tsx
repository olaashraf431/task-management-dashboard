import {Cairo} from "next/font/google";
import"./globals.css";
import { AppRouterCacheProvider } from '@mui/material-nextjs/v15-appRouter';
import { ThemeProvider } from '@mui/material/styles';
import theme from "@/theme";

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
    <html
      lang="ar" dir="rtl"
    >
      <body  className={`min-h-full flex flex-col ${cairoFont.className} bg-[#FDFBF7]`}>
        <AppRouterCacheProvider>
          <ThemeProvider theme={theme}>

              {children}
          </ThemeProvider>
          
        </AppRouterCacheProvider>
      </body>
    </html>
  );

  
}
