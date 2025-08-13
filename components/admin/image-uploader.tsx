"use client"
import { createClient } from "@/lib/supabase"
import type React from "react"

const supabase = createClient()

export default function ImageUploader({ onUrl }: { onUrl: (url: string) => void }) {
  async function onChange(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0]
    if (!file) return
    const path = `posts/${Date.now()}-${file.name}`
    const { error } = await supabase.storage.from("images").upload(path, file, { upsert: false })
    if (error) {
      alert(error.message)
      return
    }
    const { data } = supabase.storage.from("images").getPublicUrl(path)
    onUrl(data.publicUrl)
  }
  return (
    <label className="inline-block cursor-pointer text-sm">
      <span className="mr-2 rounded border px-2 py-1 dark:border-neutral-700">Upload Image</span>
      <input type="file" accept="image/*" className="hidden" onChange={onChange} />
    </label>
  )
}
