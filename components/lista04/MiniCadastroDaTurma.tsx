//Lista 04 Exercício 20 🔥🔥
// Enunciado: Mini-cadastro da turma
// Form completo: nome (input) + curso (select) + bolsista (checkbox). Valida, botão desabilitado quando inválido, adiciona à turma, limpa e renderiza com contador.

"use client";

import { useState } from "react";

type Aluno = { id: number; nome: string; curso: string; bolsista: boolean };

export default function MiniCadastroDaTurma() {
    const [form, setForm] = useState<{ nome: string; curso: string; bolsista: boolean }>({
        nome: "",
        curso: "Front-end",
        bolsista: false,
    });
    const [erro, setErro] = useState<string>("");
    const [turma, setTurma] = useState<Aluno[]>([]);

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (form.nome === "") {
            setErro("Nome obrigatório");
            return;
        }
        setErro("");
        setTurma([...turma, { id: Date.now(), nome: form.nome, curso: form.curso, bolsista: form.bolsista }]);
        setForm({ nome: "", curso: "Front-end", bolsista: false });
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
            <label className="mb-1 flex items-center justify-center gap-2 text-sm text-zinc-700">
                <input
                    type="checkbox"
                    className="h-4 w-4 rounded border-zinc-300 text-zinc-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-900 focus-visible:ring-offset-1"
                    checked={form.bolsista}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setForm({ ...form, bolsista: e.target.checked })} />
                Bolsista
            </label>
            {erro && <p className="mb-2 text-sm text-red-600">{erro}</p>}
            <button
                type="submit"
                disabled={form.nome === ""}
                className="my-3 inline-flex items-center justify-center rounded-lg bg-zinc-900 px-4 py-2 text-sm font-medium text-white shadow-sm transition-colors hover:bg-zinc-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-900 focus-visible:ring-offset-2 active:scale-[0.98] disabled:cursor-not-allowed disabled:bg-zinc-300 disabled:hover:bg-zinc-300">
                matricular
            </button>
            <p className="mb-3 text-xs font-medium uppercase tracking-wide text-zinc-500">{turma.length} aluno(s)</p>
            <ul className="space-y-2 text-left">
                {turma.map((aluno) => (
                    <li key={aluno.id} className="rounded-lg border border-zinc-100 bg-zinc-50 px-4 py-2.5 text-sm text-zinc-700">
                        {aluno.nome} — {aluno.curso}{aluno.bolsista ? " — bolsista" : ""}
                    </li>
                ))}
            </ul>
        </form>
    );
}
