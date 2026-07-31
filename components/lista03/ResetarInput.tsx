//Lista 03 Exercício 10
// Enunciado: Resetar o input
// Acrescente um botão que limpa o campo com setTexto(""). Como é controlado, o input esvazia sozinho.

"use client";

import { useState } from "react";

export default function ResetarInput() {
    const [texto, setTexto] = useState<string>("");
    return (
        <div className="mx-auto max-w-xs rounded-xl border border-zinc-200 bg-white p-6 text-center shadow-sm">
            <input
                className="mb-3 w-full rounded-lg border border-zinc-300 bg-white px-3 py-2 text-sm text-zinc-900 placeholder:text-zinc-400 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-900 focus-visible:ring-offset-1"
                placeholder="Digite algo..."
                value={texto}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setTexto(e.target.value)} />
            <button
                className="inline-flex items-center justify-center rounded-lg border border-zinc-300 bg-white px-4 py-2 text-sm font-medium text-zinc-700 transition-colors hover:bg-zinc-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-300"
                onClick={() => setTexto("")}>
                limpar
            </button>
        </div>
    );
}
