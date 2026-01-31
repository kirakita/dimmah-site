import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";

const dmSans = DM_Sans({
  variable: "--font-dm",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Dimmah | Seamless Solutions, Superior Results",
  description:
    "We build world-class software that drives growth. Your dedicated technology partner for web, mobile, and digital transformation.",
  keywords: ["software development", "web development", "digital agency", "London", "technology partner"],
  openGraph: {
    title: "Dimmah | Seamless Solutions, Superior Results",
    description: "We build world-class software that drives growth.",
    url: "https://dimmah.com",
    siteName: "Dimmah",
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dimmah | Seamless Solutions, Superior Results",
    description: "We build world-class software that drives growth.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${dmSans.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
