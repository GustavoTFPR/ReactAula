//Lista 04 Exercício 14
// Enunciado: Adicionar à turma
// Um form com nome. O botão faz setTurma([...turma, form.nome]) e a lista aparece com .map + key.

"use client";

import { useState } from "react";

export default function AdicionarATurma() {
    const [form, setForm] = useState<{ nome: string }>({ nome: "" });
    const [turma, setTurma] = useState<string[]>([]);

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setTurma([...turma, form.nome]);
        setForm({ nome: "" });
    };

    return (
        <form
            onSubmit={handleSubmit}
            className="mx-auto max-w-sm rounded-xl border border-zinc-200 bg-white p-6 text-center shadow-sm">
            <div className="mb-4 flex gap-2">
                <input
                    className="w-full rounded-lg border border-zinc-300 bg-white px-3 py-2 text-sm text-zinc-900 placeholder:text-zinc-400 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-900 focus-visible:ring-offset-1"
                    placeholder="Nome do aluno"
                    value={form.nome}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setForm({ ...form, nome: e.target.value })} />
                <button
                    type="submit"
                    className="shrink-0 inline-flex items-center justify-center rounded-lg bg-zinc-900 px-4 py-2 text-sm font-medium text-white shadow-sm transition-colors hover:bg-zinc-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-900 focus-visible:ring-offset-2 active:scale-[0.98]">
                    adicionar
                </button>
            </div>
            <ul className="space-y-2 text-left">
                {turma.map((nome, i) => (
                    <li key={i} className="rounded-lg border border-zinc-100 bg-zinc-50 px-4 py-2.5 text-sm text-zinc-700">
                        {nome}
                    </li>
                ))}
            </ul>
        </form>
    );
}
