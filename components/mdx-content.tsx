"use client"

import { useMemo } from "react"
import { MDXProvider } from "@mdx-js/react"
import * as runtime from "react/jsx-runtime"

interface MDXContentProps {
  code: string
}

export function MDXContent({ code }: MDXContentProps) {
  const Component = useMemo(() => {
    try {
      const func = new Function("React", ...Object.keys(runtime), code)
      return func(null, ...Object.values(runtime)).default
    } catch (error) {
      console.error("Error creating MDX component:", error)
      return () => <div>Error rendering content</div>
    }
  }, [code])

  return (
    <MDXProvider>
      <Component />
    </MDXProvider>
  )
}
