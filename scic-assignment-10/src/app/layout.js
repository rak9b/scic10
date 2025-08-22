import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Providers from "./providers";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "ShopNex",
  icons: {
    icon: "/shopnex.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="dark">
      <body className={`@container ${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Providers>
          <Navbar />
          <div className="min-h-[calc(100vh-64px)]">{children}</div>
        </Providers>
        <Footer />
      </body>
    </html>
  );
}
