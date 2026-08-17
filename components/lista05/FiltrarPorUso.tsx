// Lista 05 Exercício 09
// Enunciado: Filtrar por curso
// Depois de buscar a turma, exiba só os de curso === "Front-end" usando .filter (Aula 09).

"use client";

import { useEffect, useState } from "react";

type Aluno = {
    id: number;
    nome: string;
    curso: string;
};

export default function FiltrarPorUso() {
    const [turma, setTurma] = useState<Aluno[]>([]);

    useEffect(() => {
        fetch("/api/turma")
            .then((res) => res.json())
            .then((data) => setTurma(data));
    }, []);

    const frontEndAlunos = turma.filter((aluno) => aluno.curso === "Front-end");

    return (
        <div className="mx-auto max-w-sm rounded-xl border border-zinc-200 bg-white p-6 shadow-sm">
            <ul className="space-y-2">
                {frontEndAlunos.map((aluno) => (
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