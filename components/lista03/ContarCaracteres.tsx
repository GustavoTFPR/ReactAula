//Lista 03 Exercício 09
// Enunciado: Contar caracteres
// A partir do input controlado, mostre {texto.length} — quantas letras já foram digitadas.

"use client";

import { useState } from "react";

export default function ContarCaracteres() {
    const [texto, setTexto] = useState<string>("");
    return (
        <div className="mx-auto max-w-xs rounded-xl border border-zinc-200 bg-white p-6 text-center shadow-sm">
            <input
                className="mb-3 w-full rounded-lg border border-zinc-300 bg-white px-3 py-2 text-sm text-zinc-900 placeholder:text-zinc-400 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-900 focus-visible:ring-offset-1"
                placeholder="Digite algo..."
                value={texto}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setTexto(e.target.value)} />
            <p className="text-sm text-zinc-500">{texto.length} caractere(s)</p>
        </div>
    );
}
