import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Noto_Sans_JP, Josefin_Sans } from "next/font/google"
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Website",
  description: "Lorem ipsum dolor sit amet",
};

const noto = Noto_Sans_JP({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-noto",
  display: "swap",
})

const josefin_Sans = Josefin_Sans({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-josefin_Sans",
  display: "swap",
})


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${noto.variable} ${josefin_Sans.variable}`}
      >
        {children}
      </body>
    </html>
  );
}
