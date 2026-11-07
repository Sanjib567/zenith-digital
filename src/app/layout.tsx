import type { Metadata } from "next";
import type { ReactNode } from "react";
import Script from "next/script";
import { Montserrat, Inter } from "next/font/google";
import "./globals.css";
import TopBar from "@/components/TopBar";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import IntroSplash from "@/components/IntroSplash";
import Chatbot from "@/components/Chatbot";

const heading = Montserrat({ subsets: ["latin"], weight: ["600", "700", "800"], variable: "--font-heading" });
const body = Inter({ subsets: ["latin"], variable: "--font-body" });

export const metadata: Metadata = {
  title: "Zenith Digital Agency | AI SEO Marketing Agency",
  description: "Zenith Digital Agency builds websites, ecommerce stores and AI-driven SEO campaigns.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${heading.variable} ${body.variable} font-[var(--font-body)] antialiased`} suppressHydrationWarning>
        <Script id="strip-extension-attrs" strategy="beforeInteractive">
          {`(function(){try{new MutationObserver(function(ms){for(var i=0;i<ms.length;i++){var t=ms[i].target;if(t&&t.removeAttribute)t.removeAttribute("fdprocessedid");}}).observe(document.documentElement,{attributes:true,subtree:true,attributeFilter:["fdprocessedid"]});}catch(e){}})();`}
        </Script>
        <IntroSplash />

        {/* Top bar and navbar stay together at the top while scrolling */}
        <div className="sticky top-0 z-50">
          <TopBar />
          <Navbar />
        </div>

        <main>{children}</main>
        <Footer />
        <WhatsAppButton />
        <Chatbot />
      </body>
    </html>
  );
}