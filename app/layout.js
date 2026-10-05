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
    default: "G Sons Power Transformers Pvt. Ltd. | Distribution Transformers & Compact Substations",
    template: "%s | G Sons Power Transformers",
  },
  description: "G Sons Power Transformers Pvt. Ltd. manufactures Oil-Filled Distribution Transformers, Cast Resin Dry Type (CRT), Compact Substations (CSS), and HT/LT Switchgear Panels up to 5 MVA in 11 kV & 33 kV voltage classes.",
  icons: {
    icon: [
      { url: '/logo.jpeg' },
      { url: '/icon.png', type: 'image/png' },
    ],
    shortcut: '/logo.jpeg',
    apple: '/logo.jpeg',
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased light`}
    >
      <body className="min-h-full flex flex-col bg-white text-[#0f172a] selection:bg-[#063772] selection:text-white">
        <SmoothScroll>
          {/*<CustomCursor />*/}
          <Header />
          <div className="flex-1">{children}</div>
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}
