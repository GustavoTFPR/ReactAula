// Lista 05 Exercício 01
// Enunciado: Primeiro Fetch
// No useEffect, busque a turma com fetch("/api/turma").then(...) e liste os nomes numa <ul> com .map + key.

"use client";

import { useEffect, useState } from "react";

type Aluno = {
    id: number;
    nome: string;
    curso: string;
};

export default function PrimeiroFetch() {
    const [turma, setTurma] = useState<Aluno[]>([]);

    useEffect(() => {
        fetch("/api/turma")
            .then((res) => res.json())
            .then((data) => setTurma(data));
    }, []);

    return (
        <div className="mx-auto max-w-sm rounded-xl border border-zinc-200 bg-white p-6 shadow-sm">
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
