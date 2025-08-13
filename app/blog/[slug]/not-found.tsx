import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function NotFound() {
  return (
    <main className="mx-auto max-w-3xl py-12">
      <h1 className="text-2xl font-bold mb-4">Post not found</h1>
      <p className="opacity-70 mb-6">This article doesn't exist or isn't published.</p>
      <Link href="/blog">
        <Button variant="outline">← Back to Blog</Button>
      </Link>
    </main>
  )
}
