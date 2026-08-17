// Lista 05 - Exercício 12
// Enunciado: Buscar um aluno
// Busque só o aluno de id 1 em /api/turma/1. Estado useState<Aluno | null>(null); mostre nome + curso + nota.

"use client";

import { useEffect, useState } from "react";

type Aluno = {
    id: number;
    nome: string;
    curso: string;
    nota: number;
};

export default function BuscarUmAluno() {
    const [aluno, setAluno] = useState<Aluno | null>(null);

    useEffect(() => {
        async function buscarAluno() {
            const res = await fetch("/api/turma/1");
            const data = await res.json();
            setAluno(data);
        }

        buscarAluno();
    }, []);

    return (
        <div className="mx-auto max-w-sm rounded-xl border border-zinc-200 bg-white p-6 shadow-sm">
            {aluno ? (
                <div className="space-y-2">
                    <p className="text-sm text-zinc-700">
                        <span className="font-semibold">Nome:</span> {aluno.nome}
                    </p>
                    <p className="text-sm text-zinc-700">
                        <span className="font-semibold">Curso:</span> {aluno.curso}
                    </p>
                    <p className="text-sm text-zinc-700">
                        <span className="font-semibold">Nota:</span> {aluno.nota}
                    </p>
                </div>
            ) : (
                <p className="text-sm text-zinc-700">Carregando aluno...</p>
            )}
        </div>
    );
}