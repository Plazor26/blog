import { headers } from "next/headers"
import { notFound } from "next/navigation"
import Admin from "@/components/admin/admin"

export const metadata = { title: "Admin" }

export default function Dragon() {
  const host = headers().get("host") || ""
  if (!host.startsWith("neurafate.com")) return notFound()
  return <Admin />
}
