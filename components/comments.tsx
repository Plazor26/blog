"use client"
import Giscus from "@giscus/react"
import { useTheme } from "next-themes"
import { useEffect, useState } from "react"

export default function Comments() {
  const { theme, systemTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => setMounted(true), [])

  if (!mounted) return null

  const current = theme === "system" ? systemTheme : theme

  // Don't render if required env vars are missing
  if (
    !process.env.NEXT_PUBLIC_GISCUS_REPO ||
    !process.env.NEXT_PUBLIC_GISCUS_REPO_ID ||
    !process.env.NEXT_PUBLIC_GISCUS_CATEGORY ||
    !process.env.NEXT_PUBLIC_GISCUS_CATEGORY_ID
  ) {
    return null
  }

  return (
    <div className="mt-12">
      <Giscus
        repo={process.env.NEXT_PUBLIC_GISCUS_REPO as `${string}/${string}`}
        repoId={process.env.NEXT_PUBLIC_GISCUS_REPO_ID}
        category={process.env.NEXT_PUBLIC_GISCUS_CATEGORY}
        categoryId={process.env.NEXT_PUBLIC_GISCUS_CATEGORY_ID}
        mapping="pathname"
        reactionsEnabled="1"
        emitMetadata="0"
        inputPosition="top"
        theme={current === "dark" ? "dark" : "light"}
        lang="en"
        loading="lazy"
      />
    </div>
  )
}
