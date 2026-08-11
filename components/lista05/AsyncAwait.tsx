// Lista 05 Exercício 02
// Enunciado: async / await
// Mesma busca, agora com async/await. Defina uma função async dentro do useEffect e chame-a — o callback do useEffect não pode ser async.

"use client";

import { useEffect, useState } from "react";

type Aluno = {
    id: number;
    nome: string;
    curso: string;
};

export default function AsyncAwait() {
    const [turma, setTurma] = useState<Aluno[]>([]);

    useEffect(() => {
        async function buscarTurma() {
            const res = await fetch("/api/turma");
            const data = await res.json();
            setTurma(data);
        }

        buscarTurma();
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
