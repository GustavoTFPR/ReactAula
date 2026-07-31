//Lista 03 Exercício 18
// Enunciado: Presença interativa
// Array de alunos { id, nome, presente }. Cada card tem um botão que alterna a presença daquele aluno (map + setState imutável). Um contador de presentes no topo.

"use client";

import { useState } from "react";

export default function PresencaInterativa() {
    type Aluno = { id: number; nome: string; presente: boolean };
    const [alunos, setAlunos] = useState<Aluno[]>([
        { id: 1, nome: "Ana Carolina", presente: false },
        { id: 2, nome: "Pedro Henrique Pais", presente: false },
    ]);
    const alternar = (id: number) =>
        setAlunos(alunos.map(a => a.id === id ? { ...a, presente: !a.presente } : a));
    const presentes = alunos.filter(a => a.presente).length;
    return (
        <div className="mx-auto max-w-xs rounded-xl border border-zinc-200 bg-white p-6 text-center shadow-sm">
            <p className="mb-3 text-xs font-medium uppercase tracking-wide text-zinc-500">{presentes} presente(s)</p>
            <div className="space-y-2">
                {alunos.map(a => (
                    <button
                        key={a.id}
                        onClick={() => alternar(a.id)}
                        className="flex w-full items-center justify-between rounded-lg border border-zinc-100 bg-zinc-50 px-4 py-2.5 text-sm text-zinc-700 transition-colors hover:bg-zinc-100">
                        <span>{a.nome}</span>
                        <span className={`inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-xs font-medium ${a.presente ? "bg-emerald-50 text-emerald-700" : "bg-zinc-200/60 text-zinc-500"}`}>
                            {a.presente ? "🟢" : "⚪"}
                        </span>
                    </button>
                ))}
            </div>
        </div>
    );
}
