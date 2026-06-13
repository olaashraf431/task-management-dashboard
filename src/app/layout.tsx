import {Cairo} from "next/font/google";
import"./globals.css";
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
      <body  className={`min-h-full flex flex-col ${cairoFont.className}`}>{children}</body>
    </html>
  );
}
