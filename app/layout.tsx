import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import ThemeProvider from "@/components/theme-provider" // Changed to default import
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import clsx from "clsx" // Import clsx for combining class names

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Neurafate",
  description: "Welcome to Neurafate - Your AI-powered insights.",
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={clsx(inter.className, "min-h-screen bg-white dark:bg-neutral-900")}>
        <ThemeProvider>
          {" "}
          {/* Removed props as per new ThemeProvider */}
          <Navbar />
          <main className="flex-1 pt-16">
            {" "}
            {/* Added pt-16 to account for fixed navbar */}
            {children}
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}
