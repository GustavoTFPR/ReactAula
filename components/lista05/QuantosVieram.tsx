// Lista 05 Exercício 05
// Enunciado: Quantos vieram
// Acima da lista, mostre {turma.length} alunos. É o tamanho do array que voltou da API.

"use client";

import { useEffect, useState } from "react";

type Aluno = {
    id: number;
    nome: string;
    curso: string;
};

export default function QuantosVieram() {
    const [turma, setTurma] = useState<Aluno[]>([]);

    useEffect(() => {
        fetch("/api/turma")
            .then((res) => res.json())
            .then((data) => setTurma(data));
    }, []);

    return (
        <div className="mx-auto max-w-sm rounded-xl border border-zinc-200 bg-white p-6 shadow-sm">
            <div className="mb-4 flex items-center justify-between">
                <h3 className="text-sm font-semibold text-zinc-900">Turma</h3>
                <span className="inline-flex items-center rounded-full bg-zinc-100 px-2.5 py-1 text-xs font-medium text-zinc-600">
                    {turma.length} aluno(s)
                </span>
            </div>
            <ul className="space-y-2">
                {turma.map((aluno) => (
                    <li
                        key={aluno.id}
                        className="rounded-lg border border-zinc-100 bg-zinc-50 px-4 py-2.5 text-sm text-zinc-700">
                        {aluno.nome}
                    </li>
                ))}
            </ul>
        </div>
    );
}
