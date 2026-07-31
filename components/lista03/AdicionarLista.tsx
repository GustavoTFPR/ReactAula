//Lista 04 Exercício 13
// Enunciado: Adicionar à lista
// Estado string[] com dois alunos. Um botão adiciona Manuella Alves com [...turma, novo] e a lista renderiza com .map.

"use client";

import { useState } from "react";

export default function AdicionarLista() {
    const [turma, setTurma] = useState<string[]>(["Ana Carolina", "Daniel Guimarães"]);
    return (
        <div className="mx-auto max-w-sm rounded-xl border border-zinc-200 bg-white p-6 text-center shadow-sm">
            <button
                className="mb-4 inline-flex items-center justify-center rounded-lg bg-zinc-900 px-4 py-2 text-sm font-medium text-white shadow-sm transition-colors hover:bg-zinc-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-900 focus-visible:ring-offset-2 active:scale-[0.98]"
                onClick={() => setTurma([...turma, "Manuella Alves"])}>
                + aluno
            </button>
            <ul className="space-y-2 text-left">
                {turma.map((nome, i) => (
                    <li key={i} className="rounded-lg border border-zinc-100 bg-zinc-50 px-4 py-2.5 text-sm text-zinc-700">{nome}</li>
                ))}
            </ul>
        </div>
    );
}
