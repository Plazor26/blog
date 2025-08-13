import { notFound } from "next/navigation"
import { fetchPostBySlug } from "@/lib/db-posts"
import { mdxToHtml } from "@/lib/mdx"
import Comments from "@/components/comments"
import AdSlot from "@/components/ads/ad-slot"

export const dynamic = "force-dynamic"

type Props = { params: { slug: string } }

export async function generateMetadata({ params }: Props) {
  const post = await fetchPostBySlug(params.slug)
  if (post && post.published) {
    return { title: post.title, description: post.excerpt ?? undefined }
  }
  return {}
}

export default async function BlogPost({ params }: Props) {
  const post = await fetchPostBySlug(params.slug)
  if (!post || !post.published) return notFound()

  const htmlContent = await mdxToHtml(post.content)

  return (
    <article className="prose mx-auto my-12 dark:prose-invert max-w-4xl">
      <h1>{post.title}</h1>
      <time className="text-sm opacity-70">
        {new Date(post.published_at ?? post.created_at).toISOString().slice(0, 10)}
      </time>
      <div dangerouslySetInnerHTML={{ __html: htmlContent }} />

      {/* AdSense Ad Slot */}
      {process.env.NEXT_PUBLIC_ADSENSE_SLOT_ARTICLE_BOTTOM && (
        <AdSlot slot={process.env.NEXT_PUBLIC_ADSENSE_SLOT_ARTICLE_BOTTOM} />
      )}

      {/* Comments */}
      <Comments />
    </article>
  )
}
