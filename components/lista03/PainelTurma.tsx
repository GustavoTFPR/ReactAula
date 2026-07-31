//Lista 03 Exercício 20
// Enunciado: Painel da Turma
// A mesma tela das listas anteriores — agora reagindo ao usuário: input + botão para adicionar (spread), botão remover por aluno (filter), marcar presença (toggle no item) e um contador de presentes / total.

"use client";

import { useState } from "react";

export default function PainelTurma() {
    type Aluno = { id: number; nome: string; presente: boolean };
    const [turma, setTurma] = useState<Aluno[]>([{ id: 1, nome: "Ana Carolina", presente: false }]);
    const [nome, setNome] = useState<string>("");
    const add = () => { setTurma([...turma, { id: Date.now(), nome, presente: false }]); setNome(""); };
    const remover = (id: number) => setTurma(turma.filter(a => a.id !== id));
    const alternar = (id: number) => setTurma(turma.map(a => a.id === id ? { ...a, presente: !a.presente } : a));
    const presentes = turma.filter(a => a.presente).length;
    return (
        <div className="mx-auto max-w-sm rounded-xl border border-zinc-200 bg-white p-6 shadow-sm">
            <div className="mb-4 flex items-center justify-between">
                <h3 className="text-sm font-semibold text-zinc-900">Turma</h3>
                <span className="inline-flex items-center rounded-full bg-zinc-100 px-2.5 py-1 text-xs font-medium text-zinc-600">
                    {presentes}/{turma.length} presentes
                </span>
            </div>
            <div className="mb-4 flex gap-2">
                <input
                    className="w-full rounded-lg border border-zinc-300 bg-white px-3 py-2 text-sm text-zinc-900 placeholder:text-zinc-400 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-900 focus-visible:ring-offset-1"
                    placeholder="Nome do aluno"
                    value={nome}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setNome(e.target.value)} />
                <button
                    onClick={add}
                    className="shrink-0 inline-flex items-center justify-center rounded-lg bg-zinc-900 px-4 py-2 text-sm font-medium text-white shadow-sm transition-colors hover:bg-zinc-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-900 focus-visible:ring-offset-2 active:scale-[0.98]">
                    +
                </button>
            </div>
            <ul className="space-y-2">
                {turma.map(a => (
                    <li key={a.id} className="flex items-center justify-between rounded-lg border border-zinc-100 bg-zinc-50 px-4 py-2.5">
                        <button
                            onClick={() => alternar(a.id)}
                            className="flex items-center gap-2 text-sm text-zinc-700 transition-colors hover:text-zinc-900">
                            <span className={`inline-flex items-center rounded-full px-2 py-0.5 text-xs font-medium ${a.presente ? "bg-emerald-50 text-emerald-700" : "bg-zinc-200/60 text-zinc-500"}`}>
                                {a.presente ? "🟢" : "⚪"}
                            </span>
                            {a.nome}
                        </button>
                        <button
                            onClick={() => remover(a.id)}
                            aria-label={`Remover ${a.nome}`}
                            className="rounded-md p-1 text-zinc-400 transition-colors hover:bg-red-50 hover:text-red-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-300">
                            ✕
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
}
