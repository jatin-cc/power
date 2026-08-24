import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SmoothScroll from "@/components/SmoothScroll";
import CustomCursor from "@/components/CustomCursor";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: {
    default: "Vortex Power Systems | Power Transformers & Electrical Engineering",
    template: "%s | Vortex Power Systems",
  },
  description: "Global engineering corporation producing ultra-high-voltage power transformers up to 500 MVA 400 kV, custom arc furnace units, ester fluid eco-designs, and 24/7 predictive diagnostics.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased light`}
    >
      <body className="min-h-full flex flex-col bg-white text-[#0f172a] selection:bg-[#0052cc] selection:text-white">
        <SmoothScroll>
          <CustomCursor />
          <Header />
          <div className="flex-1">{children}</div>
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}
