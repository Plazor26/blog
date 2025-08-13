"use client"
import { useEffect, useState } from "react"
import { createClient } from "@/lib/supabase"
import AdminShell from "./admin-shell"

const supabase = createClient()

export default function Admin() {
  const [loading, setLoading] = useState(true)
  const [session, setSession] = useState<any>(null)

  useEffect(() => {
    supabase.auth.getSession().then(({ data }) => {
      setSession(data.session)
      setLoading(false)
    })
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, s) => {
      setSession(s)
    })
    return () => subscription.unsubscribe()
  }, [])

  if (loading) return <div className="mx-auto max-w-2xl py-16">Loading…</div>
  if (!session) return <AuthView />
  return <AdminShell onSignOut={() => supabase.auth.signOut()} />
}

function AuthView() {
  const [email, setEmail] = useState("")
  const [sent, setSent] = useState(false)
  const [error, setError] = useState<string | null>(null)

  async function sendMagic() {
    setError(null)
    const { error } = await supabase.auth.signInWithOtp({
      email,
      options: { emailRedirectTo: `${window.location.origin}/dragon` },
    })
    if (error) setError(error.message)
    else setSent(true)
  }

  return (
    <main className="mx-auto max-w-md py-16">
      <h1 className="mb-4 text-2xl font-bold">Admin Login</h1>
      <p className="mb-6 text-sm opacity-70">Enter your email to receive a magic link.</p>
      <div className="space-y-3">
        <input
          className="w-full rounded border border-neutral-300 bg-white px-3 py-2 dark:bg-neutral-800 dark:border-neutral-700"
          type="email"
          placeholder="you@domain.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button onClick={sendMagic} className="rounded bg-teal-600 px-4 py-2 text-white hover:bg-teal-700">
          Send Magic Link
        </button>
        {sent && <p className="text-sm text-teal-500">Link sent. Check your email.</p>}
        {error && <p className="text-sm text-red-500">{error}</p>}
      </div>
    </main>
  )
}
