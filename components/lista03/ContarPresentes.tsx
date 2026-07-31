//Lista 04 Exercício 15
// Enunciado: Contar presentes
// Um array de alunos com presente: boolean no estado. Mostre no topo quantos estão presentes — derivado do estado.

"use client";

import { useState } from "react";

export default function ContarPresentes() {
    type Aluno = { id: number; nome: string; presente: boolean };
    const [alunos] = useState<Aluno[]>([
        { id: 1, nome: "Ana Carolina", presente: true },
        { id: 2, nome: "Gustavo Tavares", presente: false },
        { id: 3, nome: "Thais Resende", presente: true },
    ]);
    const presentes = alunos.filter(a => a.presente).length;
    return (
        <div className="mx-auto max-w-xs rounded-xl border border-zinc-200 bg-white p-6 text-center shadow-sm">
            <p className="text-xs font-medium uppercase tracking-wide text-zinc-500">Presentes</p>
            <p className="mt-1 text-3xl font-semibold tracking-tight text-zinc-900">{presentes}<span className="text-base font-normal text-zinc-400"> /{alunos.length}</span></p>
        </div>
    );
}
