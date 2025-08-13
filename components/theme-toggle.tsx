"use client"

import { useTheme } from "next-themes"
import { useEffect, useState } from "react"
import { Sun, Moon } from "lucide-react"

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => setMounted(true), [])

  if (!mounted) return null

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light")
  }

  return (
    <button
      aria-label="Toggle Theme"
      className="rounded p-2 hover:bg-neutral-200 dark:hover:bg-neutral-700"
      onClick={toggleTheme}
    >
      {theme === "dark" ? <Moon className="h-5 w-5 text-yellow-300" /> : <Sun className="h-5 w-5 text-amber-500" />}
    </button>
  )
}
