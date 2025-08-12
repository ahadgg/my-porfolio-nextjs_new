import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import GradientOverlay from "@/components/GradientOverlay";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Muhammad Ahad - Full Stack Developer Portfolio",
  description: "Explore the portfolio of Muhammad Ahad, a Full Stack Developer specializing in React, Next.js, and Node.js. Showcasing projects, skills, and expertise in web development and software engineering.",
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.className}`}>
      <body>
        <div className="mx-auto min-h-screen max-w-screen-xl px-6 py-12 font-sans md:px-12 md:py-20 lg:px-24 lg:py-0">
          <div className="lg:flex lg:justify-between lg:gap-4">
            <Header />
            <div className="flex-1">
              <GradientOverlay />
              {children}
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
