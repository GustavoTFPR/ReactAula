// Lista 05 - Exercício 11
// Enunciado: Contador de presentes
// Mostre {turma.filter(a => a.presente).length} presentes — encadeie .filter com .length.

"use client";

import { useState } from "react";

type Aluno = {
    id: number;
    nome: string;
    presente: boolean;
};

export default function ContadorDePresentes() {
    const [turma, setTurma] = useState<Aluno[]>([
        { id: 1, nome: "David", presente: true },
        { id: 2, nome: "Pedro", presente: false },
        { id: 3, nome: "Gustavo", presente: true },
        { id: 4, nome: "Daniel", presente: false },
    ]);

    const togglePresenca = (id: number) => {
        setTurma((prevTurma) =>
            prevTurma.map((aluno) =>

                aluno.id === id ? { ...aluno, presente: !aluno.presente } : aluno
            )
        );
    };

    return (
        <div className="mx-auto max-w-sm rounded-xl border border-zinc-200 bg-white p-6 shadow-sm space-y-4">
            <h2 className="text-2xl border-b border-zinc-200 text-center font-semibold text-slate-800">Contador de Presentes</h2>
            <p className="text-sm text-zinc-700 border-b border-zinc-200 pb-2">
                Presentes: <span className="font-mono font-semibold">{turma.filter((a) => a.presente).length}</span>
            </p>
            <ul className="space-y-2">
                {turma.map((aluno) => (
                    <li key={aluno.id} className="flex items-center justify-between border-b border-zinc-200 py-2">
                        <span className="text-sm text-zinc-700">{aluno.nome}</span>
                        <button
                            onClick={() => togglePresenca(aluno.id)}
                            className={`px-3 py-1 rounded-lg text-sm font-medium ${aluno.presente ? "bg-green-500 text-white" : "bg-red-500 text-white"}`}>
                            {aluno.presente ? "Presente" : "Ausente"}
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
}