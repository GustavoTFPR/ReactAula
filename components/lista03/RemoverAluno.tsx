//Lista 04 Exercício 14
// Enunciado: Remover aluno
// A partir da lista no estado, um botão remove David Antonio com filter — mantém todos, exceto ele.

"use client";

import { useState } from "react";

export default function RemoverAluno() {
    const [turma, setTurma] = useState<string[]>(["Ana Carolina", "David Antonio", "Silas Pereira"]);
    return (
        <div className="mx-auto max-w-sm rounded-xl border border-zinc-200 bg-white p-6 text-center shadow-sm">
            <button
                className="mb-4 inline-flex items-center justify-center rounded-lg border border-red-200 bg-red-50 px-4 py-2 text-sm font-medium text-red-600 transition-colors hover:bg-red-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-300"
                onClick={() => setTurma(turma.filter(n => n !== "David Antonio"))}>
                remover David
            </button>
            <ul className="space-y-2 text-left">
                {turma.map((nome, i) => <li key={i} className="rounded-lg border border-zinc-100 bg-zinc-50 px-4 py-2.5 text-sm text-zinc-700">{nome}</li>)}
            </ul>
        </div>
    );
}
