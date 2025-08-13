import { unified } from "unified"
import remarkParse from "remark-parse"
import remarkMath from "remark-math"
import remarkRehype from "remark-rehype"
import rehypeKatex from "rehype-katex"
import rehypeSlug from "rehype-slug"
import rehypeAutolinkHeadings from "rehype-autolink-headings"
import rehypeStringify from "rehype-stringify"

export async function mdxToHtml(source: string) {
  const result = await unified()
    .use(remarkParse) // Parse markdown
    .use(remarkMath) // Support math syntax
    .use(remarkRehype) // Convert to HTML AST
    .use(rehypeKatex) // Render math with KaTeX
    .use(rehypeSlug) // Add IDs to headings
    .use(rehypeAutolinkHeadings) // Add links to headings
    .use(rehypeStringify) // Convert to HTML string
    .process(source)

  return String(result)
}
