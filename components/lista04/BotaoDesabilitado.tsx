//Lista 04 Exercício 13
// Enunciado: Botão desabilitado
// O botão fica disabled enquanto o nome estiver vazio: disabled={form.nome === ""}.

"use client";

import { useState } from "react";

export default function BotaoDesabilitado() {
    const [form, setForm] = useState<{ nome: string }>({ nome: "" });
    return (
        <div className="mx-auto max-w-xs rounded-xl border border-zinc-200 bg-white p-6 text-center shadow-sm">
            <input
                className="mb-3 w-full rounded-lg border border-zinc-300 bg-white px-3 py-2 text-sm text-zinc-900 placeholder:text-zinc-400 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-900 focus-visible:ring-offset-1"
                placeholder="Nome"
                value={form.nome}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setForm({ ...form, nome: e.target.value })} />
            <button
                disabled={form.nome === ""}
                className="inline-flex items-center justify-center rounded-lg bg-zinc-900 px-4 py-2 text-sm font-medium text-white shadow-sm transition-colors hover:bg-zinc-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-900 focus-visible:ring-offset-2 active:scale-[0.98] disabled:cursor-not-allowed disabled:bg-zinc-300 disabled:hover:bg-zinc-300">
                enviar
            </button>
        </div>
    );
}
