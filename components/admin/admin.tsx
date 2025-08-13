"use client"
import { useEffect, useState } from "react"
import type React from "react"

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
  const [password, setPassword] = useState("")
  const [error, setError] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)

  async function signIn() {
    setError(null)
    setLoading(true)

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    })

    if (error) {
      setError("Invalid credentials. Access denied.")
    }
    setLoading(false)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    signIn()
  }

  return (
    <main className="mx-auto max-w-md py-16">
      <h1 className="mb-4 text-2xl font-bold">Admin Access</h1>
      <p className="mb-6 text-sm opacity-70">Sign in with your existing admin credentials.</p>
      <form onSubmit={handleSubmit} className="space-y-3">
        <input
          className="w-full rounded border border-neutral-300 bg-white px-3 py-2 dark:bg-neutral-800 dark:border-neutral-700"
          type="email"
          placeholder="Admin email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          className="w-full rounded border border-neutral-300 bg-white px-3 py-2 dark:bg-neutral-800 dark:border-neutral-700"
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button
          type="submit"
          disabled={loading}
          className="w-full rounded bg-teal-600 px-4 py-2 text-white hover:bg-teal-700 disabled:opacity-50"
        >
          {loading ? "Signing in..." : "Sign In"}
        </button>
        {error && <p className="text-sm text-red-500">{error}</p>}
      </form>
    </main>
  )
}
