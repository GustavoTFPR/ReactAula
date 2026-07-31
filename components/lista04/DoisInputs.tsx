//Lista 04 Exercício 02
// Enunciado: Dois inputs
// Nome e curso, cada um com seu próprio estado. Mostre os dois na tela: Ana Carolina — Front-end.

"use client";

import { useState } from "react";

export default function DoisInputs() {
    const [nome, setNome] = useState<string>("");
    const [curso, setCurso] = useState<string>("");
    return (
        <div className="mx-auto max-w-xs rounded-xl border border-zinc-200 bg-white p-6 text-center shadow-sm">
            <input
                className="mb-3 w-full rounded-lg border border-zinc-300 bg-white px-3 py-2 text-sm text-zinc-900 placeholder:text-zinc-400 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-900 focus-visible:ring-offset-1"
                placeholder="Nome"
                value={nome}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setNome(e.target.value)} />
            <input
                className="mb-3 w-full rounded-lg border border-zinc-300 bg-white px-3 py-2 text-sm text-zinc-900 placeholder:text-zinc-400 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-900 focus-visible:ring-offset-1"
                placeholder="Curso"
                value={curso}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setCurso(e.target.value)} />
            <p className="text-sm text-zinc-600">{nome} — {curso}</p>
        </div>
    );
}
