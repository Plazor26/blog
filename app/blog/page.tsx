import Link from "next/link"
import { fetchPublishedPosts } from "@/lib/db-posts"

export const metadata = { title: "Blog – Neurafate" }
export const dynamic = "force-dynamic"

export default async function BlogList() {
  const posts = await fetchPublishedPosts()

  return (
    <main className="mx-auto max-w-3xl py-12">
      <h1 className="mb-8 text-4xl font-bold">Blog</h1>
      {!posts || posts.length === 0 ? (
        <p className="opacity-70">No posts published yet.</p>
      ) : (
        <ul className="space-y-6">
          {posts.map((p) => (
            <li key={p.slug}>
              <Link href={`/blog/${p.slug}`} className="block p-4 rounded-lg hover:bg-muted/50 transition-colors">
                <article className="prose dark:prose-invert">
                  <h2>{p.title}</h2>
                  {p.excerpt && <p>{p.excerpt}</p>}
                  <time className="text-sm opacity-70">
                    {new Date(p.published_at ?? p.created_at).toISOString().slice(0, 10)}
                  </time>
                </article>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </main>
  )
}
