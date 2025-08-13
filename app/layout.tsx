import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import Script from "next/script"
import "./globals.css"
import ThemeProvider from "@/components/theme-provider"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import clsx from "clsx"

const inter = Inter({ subsets: ["latin"] })

const gaId = process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID
const adsClient = process.env.NEXT_PUBLIC_ADSENSE_CLIENT

export const metadata: Metadata = {
  title: "Neurafate",
  description: "Welcome to Neurafate - Your AI-powered insights.",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={clsx(inter.className, "min-h-screen bg-white dark:bg-neutral-900")}>
        {/* Google Analytics */}
        {gaId ? (
          <>
            <Script src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`} strategy="afterInteractive" />
            <Script id="ga-setup" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${gaId}', { anonymize_ip: true });
              `}
            </Script>
          </>
        ) : null}

        {/* Google AdSense */}
        {adsClient ? (
          <Script
            id="adsbygoogle-init"
            src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${adsClient}`}
            strategy="afterInteractive"
            crossOrigin="anonymous"
          />
        ) : null}

        <ThemeProvider>
          <Navbar />
          <main className="flex-1 pt-16">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}
