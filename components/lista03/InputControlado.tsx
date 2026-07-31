//Lista 03 Exercício 08
// Enunciado: Input controlado
// Um input com value e onChange ligados ao estado. O que você digita aparece abaixo.

"use client";

import { useState } from "react";

export default function InputControlado() {
    const [texto, setTexto] = useState<string>("");
    return (
        <div className="mx-auto max-w-xs rounded-xl border border-zinc-200 bg-white p-6 text-center shadow-sm">
            <input
                className="mb-3 w-full rounded-lg border border-zinc-300 bg-white px-3 py-2 text-sm text-zinc-900 placeholder:text-zinc-400 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-900 focus-visible:ring-offset-1"
                placeholder="Digite algo..."
                value={texto}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setTexto(e.target.value)} />
            <p className="text-sm text-zinc-600">{texto}</p>
        </div>
    );
}
