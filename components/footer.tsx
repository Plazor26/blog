import Link from "next/link"
import { GithubIcon, TwitterIcon, LinkedinIcon } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t py-6 md:py-8">
      <div className="container flex flex-col items-center justify-between gap-4 md:flex-row px-4 md:px-6">
        <div className="flex flex-col items-center gap-2 md:flex-row md:gap-4">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} Neurafate. All rights reserved.
          </p>
          <Link href="/privacy" className="text-sm text-muted-foreground hover:underline underline-offset-4">
            Privacy Policy
          </Link>
          <Link href="/terms" className="text-sm text-muted-foreground hover:underline underline-offset-4">
            Terms of Service
          </Link>
        </div>
        <nav className="flex gap-4 sm:gap-6">
          <Link href="#" className="text-sm font-medium hover:underline underline-offset-4" aria-label="GitHub">
            <GithubIcon className="h-5 w-5" />
          </Link>
          <Link href="#" className="text-sm font-medium hover:underline underline-offset-4" aria-label="Twitter">
            <TwitterIcon className="h-5 w-5" />
          </Link>
          <Link href="#" className="text-sm font-medium hover:underline underline-offset-4" aria-label="LinkedIn">
            <LinkedinIcon className="h-5 w-5" />
          </Link>
        </nav>
      </div>
    </footer>
  )
}
