"use client"
import ReactMarkdown from "react-markdown"
import remarkGfm from "remark-gfm"
import remarkMath from "remark-math"
import rehypeKatex from "rehype-katex"

export default function MarkdownPreview({ value }: { value: string }) {
  return (
    <article className="prose dark:prose-invert">
      <ReactMarkdown remarkPlugins={[remarkGfm, remarkMath]} rehypePlugins={[rehypeKatex]}>
        {value}
      </ReactMarkdown>
    </article>
  )
}
