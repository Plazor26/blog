import { createClient } from "@/lib/supabase"

export type Post = {
  id: string
  title: string
  slug: string
  excerpt?: string
  content: string
  tags?: string[]
  published: boolean
  published_at?: string
  created_at: string
  updated_at: string
}

export async function fetchPublishedPosts(): Promise<Post[]> {
  const supabase = createClient()

  const { data, error } = await supabase
    .from("posts")
    .select("*")
    .eq("published", true)
    .order("published_at", { ascending: false })

  if (error) {
    console.error("Error fetching posts:", error)
    return []
  }

  return data || []
}

export async function fetchPostBySlug(slug: string): Promise<Post | null> {
  const supabase = createClient()

  const { data, error } = await supabase.from("posts").select("*").eq("slug", slug).single()

  if (error) {
    console.error("Error fetching post:", error)
    return null
  }

  return data
}
