//Lista 04 Exercício 18 🔥
// Enunciado: Matrícula completa
// Form com nome, curso (select) e nota (number). No submit: valida nome, adiciona { id, nome, curso, nota } à turma e limpa.

"use client";

import { useState } from "react";

type Aluno = { id: number; nome: string; curso: string; nota: number };

export default function MatriculaCompleta() {
    const [form, setForm] = useState<{ nome: string; curso: string; nota: number }>({
        nome: "",
        curso: "Front-end",
        nota: 0,
    });
    const [turma, setTurma] = useState<Aluno[]>([]);

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (form.nome === "") {
            alert("Preencha o nome");
            return;
        }
        setTurma([...turma, { id: Date.now(), nome: form.nome, curso: form.curso, nota: form.nota }]);
        setForm({ nome: "", curso: "Front-end", nota: 0 });
    };

    return (
        <form
            onSubmit={handleSubmit}
            className="mx-auto max-w-sm rounded-xl border border-zinc-200 bg-white p-6 text-center shadow-sm">
            <input
                className="mb-3 w-full rounded-lg border border-zinc-300 bg-white px-3 py-2 text-sm text-zinc-900 placeholder:text-zinc-400 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-900 focus-visible:ring-offset-1"
                placeholder="Nome"
                value={form.nome}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setForm({ ...form, nome: e.target.value })} />
            <select
                className="mb-3 w-full rounded-lg border border-zinc-300 bg-white px-3 py-2 text-sm text-zinc-900 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-900 focus-visible:ring-offset-1"
                value={form.curso}
                onChange={(e: React.ChangeEvent<HTMLSelectElement>) => setForm({ ...form, curso: e.target.value })}>
                <option>Front-end</option>
                <option>Back-end</option>
                <option>Design</option>
                <option>Mobile</option>
                <option>Dados</option>
            </select>
            <input
                type="number"
                className="mb-3 w-full rounded-lg border border-zinc-300 bg-white px-3 py-2 text-sm text-zinc-900 placeholder:text-zinc-400 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-900 focus-visible:ring-offset-1"
                placeholder="Nota"
                value={form.nota}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setForm({ ...form, nota: Number(e.target.value) })} />
            <button
                type="submit"
                className="mb-4 inline-flex items-center justify-center rounded-lg bg-zinc-900 px-4 py-2 text-sm font-medium text-white shadow-sm transition-colors hover:bg-zinc-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-900 focus-visible:ring-offset-2 active:scale-[0.98]">
                matricular
            </button>
            <ul className="space-y-2 text-left">
                {turma.map((aluno) => (
                    <li key={aluno.id} className="rounded-lg border border-zinc-100 bg-zinc-50 px-4 py-2.5 text-sm text-zinc-700">
                        {aluno.nome} — {aluno.curso} — nota {aluno.nota}
                    </li>
                ))}
            </ul>
        </form>
    );
}
