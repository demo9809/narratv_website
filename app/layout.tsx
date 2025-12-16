import type { Metadata } from "next";
import "./globals.css";
import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Narratv Space - The Trusted Narrator for Great Brands",
  description: "Premium advertising agency specializing in brand storytelling, creative strategy, and cinematic video production. 8+ years of experience crafting compelling narratives for leading brands.",
  keywords: "advertising agency, brand storytelling, creative strategy, video production, digital marketing, content creation, AI video",
  openGraph: {
    title: "Narratv Space - The Trusted Narrator for Great Brands",
    description: "Premium advertising agency specializing in brand storytelling, creative strategy, and cinematic video production.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Navigation />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
