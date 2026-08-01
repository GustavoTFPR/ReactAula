//Lista 04 Exercício 11
// Enunciado: Limpar o form
// Depois de enviar, volte o form ao inicial: setForm({ nome: "", curso: "" }). Os inputs zeram sozinhos.

"use client";

import { useState } from "react";

export default function LimparForm() {
    const [form, setForm] = useState<{ nome: string; curso: string }>({ nome: "", curso: "" });
    const [enviados, setEnviados] = useState<number>(0);

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setEnviados(enviados + 1);
        setForm({ nome: "", curso: "" });
    };

    return (
        <form
            onSubmit={handleSubmit}
            className="mx-auto max-w-xs rounded-xl border border-zinc-200 bg-white p-6 text-center shadow-sm">
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
            <button
                type="submit"
                className="mb-3 inline-flex items-center justify-center rounded-lg bg-zinc-900 px-4 py-2 text-sm font-medium text-white shadow-sm transition-colors hover:bg-zinc-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-900 focus-visible:ring-offset-2 active:scale-[0.98]">
                enviar
            </button>
            <p className="text-sm text-zinc-500">{enviados} envio(s)</p>
        </form>
    );
}
