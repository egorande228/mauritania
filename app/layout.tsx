import Script from "next/script";
import type { Metadata } from "next";
import "./globals.css";
import TopBar from "@/components/TopBar";
import InteractiveBackground from "@/components/InteractiveBackground";
import { marketMetadata } from "@/lib/market";
import { LanguageProvider } from "@/providers/LanguageProvider";

export const metadata: Metadata = marketMetadata;

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className="h-full antialiased"
    >
      <body className="page-shell min-h-full">
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-EEMV2L4H74"
          strategy="afterInteractive"
        />
        <Script id="google-analytics-G-EEMV2L4H74" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            window.gtag = window.gtag || function(){window.dataLayer.push(arguments);}
            window.gtag('js', new Date());
            window.gtag('config', 'G-EEMV2L4H74');
          `}
        </Script>
        <LanguageProvider>
          <InteractiveBackground />
          <div className="page-content">
            <TopBar />
            {children}
          </div>
        </LanguageProvider>
      </body>
    </html>
  );
}
