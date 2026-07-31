//Lista 04 Exercício 03
// Enunciado: Um objeto no estado
// Guarde nome e curso num só objeto: useState<{ nome; curso }>. Cada input atualiza um campo com setForm({ ...form, nome: ... }).

"use client";

import { useState } from "react";

export default function ObjetoNoEstado() {
    const [form, setForm] = useState<{ nome: string; curso: string }>({ nome: "", curso: "" });
    return (
        <div className="mx-auto max-w-xs rounded-xl border border-zinc-200 bg-white p-6 text-center shadow-sm">
            <input
                className="mb-3 w-full rounded-lg border border-zinc-300 bg-white px-3 py-2 text-sm text-zinc-900 placeholder:text-zinc-400 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-900 focus-visible:ring-offset-1"
                placeholder="Nome"
                value={form.nome}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setForm({ ...form, nome: e.target.value })} />
            <input
                className="mb-3 w-full rounded-lg border border-zinc-300 bg-white px-3 py-2 text-sm text-zinc-900 placeholder:text-zinc-400 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-900 focus-visible:ring-offset-1"
                placeholder="Curso"
                value={form.curso}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setForm({ ...form, curso: e.target.value })} />
            <p className="text-sm text-zinc-600">{form.nome} — {form.curso}</p>
        </div>
    );
}
