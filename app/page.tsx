import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function HomePage() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-start space-y-4 text-left">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl/none">
              Welcome to Neurafate
            </h1>
            <p className="max-w-[700px] text-muted-foreground md:text-xl">
              Unlocking the power of AI for innovative solutions and insightful content.
            </p>
          </div>
          <div className="flex flex-col gap-2 min-[400px]:flex-row">
            <Link href="/blog" passHref>
              <Button>Explore Blog</Button>
            </Link>
            <Link href="#" passHref>
              <Button variant="outline">Join Newsletter</Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
