"use client";

import { useState } from "react";

export default function CTA() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "success" | "exists" | "error">("idle");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    if (loading) return;

    setLoading(true);
    setStatus("idle");

    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      if (res.ok) {
        setEmail("");
        setStatus("success");
      } else if (res.status === 409) {
        setStatus("exists");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    } finally {
      setLoading(false);
    }
  }

  return (
    <section className="py-28 border-t border-white/10">
<div className="content-shell space-y-8 max-w-2xl">
        <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight">Join early.</h2>

        <p className="text-gray-400 text-lg leading-relaxed">
          We are building slowly and deliberately.
          <br />
          If our way of thinking resonates, you can follow along from the beginning.
        </p>

        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-lg">
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="vrmgroupofcompanies@gmail.com"
            className="flex-1 bg-transparent border border-white/20 rounded-full px-5 py-3.5 text-white placeholder-gray-500 focus:outline-none focus:border-white/40"
          />

          <button
            type="submit"
            disabled={loading}
            className={`px-6 py-3.5 rounded-full font-semibold transition border border-white ${
              loading
                ? "opacity-60 cursor-not-allowed"
                : "bg-white text-black hover:bg-gray-200 hover:-translate-y-0.5 hover:shadow-[0_18px_45px_rgba(255,255,255,0.2)]"
            }`}
          >
            {loading ? "..." : "Join"}
          </button>
        </form>

        {status === "exists" && <p className="text-sm text-gray-400">You're already on the list.</p>}
        {status === "success" && <p className="text-sm text-gray-400">You're in. We'll be in touch.</p>}
        {status === "error" && (
          <p className="text-sm text-gray-500">Something went wrong. Try again later.</p>
        )}

        <p className="text-sm text-gray-500">No spam. No noise. Just signal.</p>
      </div>
    </section>
  );
}
