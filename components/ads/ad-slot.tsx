"use client"
import { useEffect } from "react"

declare global {
  interface Window {
    adsbygoogle: any[]
  }
}

type Props = {
  slot: string
  layout?: string
  format?: string // e.g., 'fluid' or 'auto'
  responsive?: boolean // data-full-width-responsive='true'
}

export default function AdSlot({ slot, layout, format = "auto", responsive = true }: Props) {
  useEffect(() => {
    try {
      // @ts-ignore
      ;(window.adsbygoogle = window.adsbygoogle || []).push({})
    } catch (err) {
      console.error("AdSense error:", err)
    }
  }, [])

  if (!process.env.NEXT_PUBLIC_ADSENSE_CLIENT) return null

  return (
    <ins
      className="adsbygoogle block my-8"
      style={{ display: "block" }}
      data-ad-client={process.env.NEXT_PUBLIC_ADSENSE_CLIENT}
      data-ad-slot={slot}
      data-ad-format={format}
      {...(layout ? { "data-ad-layout": layout } : {})}
      {...(responsive ? { "data-full-width-responsive": "true" } : {})}
    />
  )
}
