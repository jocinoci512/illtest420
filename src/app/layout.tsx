import type { Metadata } from "next";
import { Inter, Cinzel, Cinzel_Decorative } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const cinzel = Cinzel({
  variable: "--font-cinzel",
  subsets: ["latin"],
});

const cinzelDecorative = Cinzel_Decorative({
  variable: "--font-cinzel-decorative",
  subsets: ["latin"],
  weight: ["400", "700", "900"],
});

export const metadata: Metadata = {
  title: "Elite Illuminati Official | The Order Awaits",
  description: "Join the world's most exclusive fraternal organization. Elite Illuminati Official has guided visionary minds since 1776.",
  openGraph: {
    title: "Elite Illuminati Official | The Order Awaits",
    description: "Join the world's most exclusive fraternal organization.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${cinzel.variable} ${cinzelDecorative.variable}`}
    >
      <body className="min-h-screen bg-dark-bg text-neutral-200 font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
