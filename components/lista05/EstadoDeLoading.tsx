// Lista 05 Exercício 03
// Enunciado: Estado de loading
// Enquanto os dados não chegam, mostre Carregando…. Comece com useState<boolean>(true) e chame setCarregando(false) no fim.

"use client";

import { useEffect, useState } from "react";

type Aluno = {
    id: number;
    nome: string;
    curso: string;
};

export default function EstadoDeLoading() {
    const [turma, setTurma] = useState<Aluno[]>([]);
    const [carregando, setCarregando] = useState<boolean>(true);

    useEffect(() => {
        async function buscarTurma() {
            const res = await fetch("/api/turma");
            const data = await res.json();
            setTurma(data);
            setCarregando(false);
        }

        buscarTurma();
    }, []);

    if (carregando) {
        return (
            <div className="mx-auto max-w-sm rounded-xl border border-zinc-200 bg-white p-6 text-center shadow-sm">
                <p className="text-sm text-zinc-500">Carregando…</p>
            </div>
        );
    }

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
