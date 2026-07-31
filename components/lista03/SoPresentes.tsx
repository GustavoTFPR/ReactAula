//Lista 03 Exercício 17
// Enunciado: Só os presentes
// Um boolean no estado liga um filtro visual: quando ligado, o .map mostra só quem está presente (ternário / &&).

"use client";

import { useState } from "react";

export default function SoPresentes() {
    type Aluno = { id: number; nome: string; presente: boolean };
    const [so, setSo] = useState<boolean>(false);
    const [alunos] = useState<Aluno[]>([
        { id: 1, nome: "João Eduardo", presente: true },
        { id: 2, nome: "Luis Felipe", presente: false },
    ]);
    return (
        <div className="mx-auto max-w-xs rounded-xl border border-zinc-200 bg-white p-6 text-center shadow-sm">
            <button
                className={`mb-4 inline-flex items-center justify-center rounded-lg px-4 py-2 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-300 ${so ? "bg-zinc-900 text-white hover:bg-zinc-800" : "border border-zinc-300 bg-white text-zinc-700 hover:bg-zinc-50"}`}
                onClick={() => setSo(!so)}>
                só presentes
            </button>
            <ul className="space-y-2 text-left">
                {alunos.map(a => (!so || a.presente) && <li key={a.id} className="rounded-lg border border-zinc-100 bg-zinc-50 px-4 py-2.5 text-sm text-zinc-700">{a.nome}</li>)}
            </ul>
        </div>
    );
}
