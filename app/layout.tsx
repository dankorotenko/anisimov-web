import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Header from "@/components/Header";

const clashDisplay = localFont({
  src: [
    {
      path: "./fonts/ClashDisplay-Extralight.woff",
      weight: "200",
      style: "normal",
    },
    {
      path: "./fonts/ClashDisplay-Light.woff",
      weight: "300",
      style: "normal",
    },
    {
      path: "./fonts/ClashDisplay-Regular.woff",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/ClashDisplay-Medium.woff",
      weight: "500",
      style: "normal",
    },
    {
      path: "./fonts/ClashDisplay-Semibold.woff",
      weight: "600",
      style: "normal",
    },
    {
      path: "./fonts/ClashDisplay-Bold.woff",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-clash-display",
});

export const metadata: Metadata = {
  title: "Anisimov Media",
  description: "Anisimov Media Website",
  icons: {
    icon: "/logo.svg", 
    shortcut: "/logo.svg", 
    apple: "/logo.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scrollbar-hide">
      <body className={`${clashDisplay.variable} antialiased bg-base h-dvh`}>
        <Header />
        {children}
      </body>
    </html>
  );
}
