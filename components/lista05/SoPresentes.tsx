// Lista 05 Exercício 10
// Enunciado: Só presentes
// Cada aluno tem presente: boolean. Liste só quem está presente com .filter(a => a.presente).

"use client";

import { useEffect, useState } from "react";

type Aluno = {
    id: number;
    nome: string;
    curso: string;
    presente: boolean;
};

export default function SoPresentes() {
    const [turma, setTurma] = useState<Aluno[]>([]);

    useEffect(() => {
        fetch("/api/turma")
            .then((res) => res.json())
            .then((data) => setTurma(data));
    }, []);

    const presentes = turma.filter((aluno) => aluno.presente);

    return (
        <div className="mx-auto max-w-sm rounded-xl border border-zinc-200 bg-white p-6 shadow-sm">
            <ul className="space-y-2">
                {presentes.map((aluno) => (
                    <li
                        key={aluno.id}
                        className="rounded-lg border border-zinc-100 bg-zinc-50 px-4 py-2.5">
                        <p className="text-sm font-medium text-zinc-900">{aluno.nome}</p>
                        <p className="text-xs text-zinc-500">{aluno.curso}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
}