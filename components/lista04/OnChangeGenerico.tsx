//Lista 04 Exercício 04
// Enunciado: onChange genérico
// Um só handler para os dois inputs, usando [e.target.name]. Os inputs têm name="nome" e name="curso".

"use client";

import { useState } from "react";

export default function OnChangeGenerico() {
    const [form, setForm] = useState<{ nome: string; curso: string }>({ nome: "", curso: "" });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    return (
        <div className="mx-auto max-w-xs rounded-xl border border-zinc-200 bg-white p-6 text-center shadow-sm">
            <input
                className="mb-3 w-full rounded-lg border border-zinc-300 bg-white px-3 py-2 text-sm text-zinc-900 placeholder:text-zinc-400 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-900 focus-visible:ring-offset-1"
                name="nome"
                placeholder="Nome"
                value={form.nome}
                onChange={handleChange} />
            <input
                className="mb-3 w-full rounded-lg border border-zinc-300 bg-white px-3 py-2 text-sm text-zinc-900 placeholder:text-zinc-400 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-900 focus-visible:ring-offset-1"
                name="curso"
                placeholder="Curso"
                value={form.curso}
                onChange={handleChange} />
            <p className="text-sm text-zinc-600">{form.nome} — {form.curso}</p>
        </div>
    );
}
