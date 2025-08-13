import type React from "react"
export default function SiteLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="container px-4 md:px-6 py-8">
      <article className="prose dark:prose-invert max-w-none">{children}</article>
    </div>
  )
}
