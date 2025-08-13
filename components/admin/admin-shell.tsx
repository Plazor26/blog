"use client"
import { useEffect, useMemo, useState } from "react"
import { createClient } from "@/lib/supabase"
import slugify from "slugify"
import MarkdownPreview from "./markdown-preview"
import ImageUploader from "./image-uploader"

const supabase = createClient()

type DbPost = {
  id: string
  title: string
  slug: string
  excerpt: string | null
  content: string
  tags: string[] | null
  published: boolean
  created_at: string
  updated_at: string
  published_at: string | null
}

export default function AdminShell({ onSignOut }: { onSignOut: () => void }) {
  const [posts, setPosts] = useState<DbPost[]>([])
  const [editing, setEditing] = useState<DbPost | null>(null)
  const [form, setForm] = useState({
    title: "",
    slug: "",
    excerpt: "",
    tags: "",
    content: "",
    published: false,
  })
  const [saving, setSaving] = useState(false)
  const [msg, setMsg] = useState<string | null>(null)

  useEffect(() => {
    loadPosts()
  }, [])

  async function loadPosts() {
    const { data } = await supabase
      .from("posts")
      .select("id,title,slug,excerpt,published,created_at,published_at,updated_at,tags,content")
      .order("updated_at", { ascending: false })
    setPosts(data || [])
  }

  function startNew() {
    setEditing(null)
    setForm({ title: "", slug: "", excerpt: "", tags: "", content: "", published: false })
    setMsg(null)
  }

  function edit(p: DbPost) {
    setEditing(p)
    setForm({
      title: p.title,
      slug: p.slug,
      excerpt: p.excerpt || "",
      tags: (p.tags || []).join(","),
      content: p.content,
      published: p.published,
    })
    setMsg(null)
  }

  function onTitleChange(v: string) {
    setForm((f) => ({ ...f, title: v, slug: f.slug || slugify(v, { lower: true, strict: true }) }))
  }

  const tagArray = useMemo(
    () =>
      form.tags
        .split(",")
        .map((t) => t.trim())
        .filter(Boolean),
    [form.tags],
  )

  async function save(publish?: boolean) {
    setSaving(true)
    setMsg(null)

    // Publish-state resolution
    const willPublish = publish ?? form.published

    const payload: any = {
      title: form.title,
      slug: form.slug || slugify(form.title, { lower: true, strict: true }),
      excerpt: form.excerpt || null,
      content: form.content,
      tags: tagArray.length ? tagArray : null,
      published: willPublish,
      published_at: willPublish ? (editing?.published_at ?? new Date().toISOString()) : null,
    }

    let error
    if (editing) {
      const res = await supabase.from("posts").update(payload).eq("id", editing.id).select().single()
      error = res.error
    } else {
      const res = await supabase.from("posts").insert(payload).select().single()
      error = res.error
    }

    setSaving(false)
    if (error) setMsg(error.message)
    else {
      setMsg("Saved.")
      await loadPosts()
    }
  }

  async function remove(p: DbPost) {
    if (!confirm("Delete this post?")) return
    const { error } = await supabase.from("posts").delete().eq("id", p.id)
    if (!error) {
      await loadPosts()
      if (editing?.id === p.id) startNew()
    }
  }

  return (
    <main className="mx-auto max-w-5xl py-10">
      <div className="mb-6 flex items-center justify-between">
        <h1 className="text-3xl font-bold">Admin</h1>
        <button onClick={onSignOut} className="rounded border px-3 py-1 hover:bg-neutral-100 dark:hover:bg-neutral-800">
          Sign out
        </button>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        <aside className="md:col-span-1">
          <button onClick={startNew} className="mb-3 w-full rounded bg-teal-600 px-3 py-2 text-white hover:bg-teal-700">
            + New Post
          </button>
          <ul className="space-y-2">
            {posts.map((p) => (
              <li key={p.id} className="rounded border px-3 py-2 dark:border-neutral-700">
                <div className="flex items-center justify-between gap-3">
                  <button onClick={() => edit(p)} className="truncate text-left hover:underline">
                    {p.title}
                  </button>
                  <div className="flex items-center gap-2">
                    {p.published && <span className="text-xs text-teal-500">Published</span>}
                    <button onClick={() => remove(p)} className="text-xs text-red-500 hover:underline">
                      Delete
                    </button>
                  </div>
                </div>
                <div className="text-xs opacity-70">{p.slug}</div>
              </li>
            ))}
          </ul>
        </aside>

        <section className="md:col-span-2">
          <div className="mb-4 grid gap-3">
            <input
              className="w-full rounded border px-3 py-2 dark:border-neutral-700 dark:bg-neutral-900"
              placeholder="Title"
              value={form.title}
              onChange={(e) => onTitleChange(e.target.value)}
            />
            <input
              className="w-full rounded border px-3 py-2 text-sm dark:border-neutral-700 dark:bg-neutral-900"
              placeholder="slug"
              value={form.slug}
              onChange={(e) => setForm((f) => ({ ...f, slug: e.target.value }))}
            />
            <textarea
              className="h-20 w-full rounded border px-3 py-2 text-sm dark:border-neutral-700 dark:bg-neutral-900"
              placeholder="Excerpt (optional, ~160 chars)"
              value={form.excerpt}
              onChange={(e) => setForm((f) => ({ ...f, excerpt: e.target.value }))}
            />
            <input
              className="w-full rounded border px-3 py-2 text-sm dark:border-neutral-700 dark:bg-neutral-900"
              placeholder="tags (comma separated)"
              value={form.tags}
              onChange={(e) => setForm((f) => ({ ...f, tags: e.target.value }))}
            />
            <ImageUploader onUrl={(url) => setForm((f) => ({ ...f, content: f.content + `\n\n![](${url})\n` }))} />
            <div className="flex items-center gap-3">
              <label className="flex items-center gap-2 text-sm">
                <input
                  type="checkbox"
                  checked={form.published}
                  onChange={(e) => setForm((f) => ({ ...f, published: e.target.checked }))}
                />
                Published
              </label>
              <button
                disabled={saving}
                onClick={() => save(false)}
                className="rounded border px-3 py-1 hover:bg-neutral-100 dark:hover:bg-neutral-800"
              >
                Save Draft
              </button>
              <button
                disabled={saving}
                onClick={() => save(true)}
                className="rounded bg-teal-600 px-3 py-1 text-white hover:bg-teal-700"
              >
                Publish
              </button>
              {msg && <span className="text-sm opacity-70">{msg}</span>}
            </div>
          </div>

          <div className="grid gap-3 md:grid-cols-2">
            <textarea
              className="h-[60vh] w-full rounded border px-3 py-2 text-sm dark:border-neutral-700 dark:bg-neutral-900"
              placeholder="Write Markdown + LaTeX here…"
              value={form.content}
              onChange={(e) => setForm((f) => ({ ...f, content: e.target.value }))}
            />
            <div className="h-[60vh] overflow-auto rounded border p-4 dark:border-neutral-700">
              <MarkdownPreview value={form.content || "Preview will appear here…"} />
            </div>
          </div>
        </section>
      </div>
    </main>
  )
}
