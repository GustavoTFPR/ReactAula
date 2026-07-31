//Lista 03 Exercício 02
// Enunciado: Contador +1
// Guarde um número no estado com useState<number>(0). Um botão soma 1 e a tela mostra o valor.

"use client";

import { useState } from "react";

export default function ContadorMaisUm() {
    const [n, setN] = useState<number>(0);
    return (
        <div className="mx-auto max-w-xs rounded-xl border border-zinc-200 bg-white p-6 text-center shadow-sm">
            <p className="mb-1 text-xs font-medium uppercase tracking-wide text-zinc-500">Contador</p>
            <p className="mb-4 text-4xl font-semibold tracking-tight text-zinc-900">{n}</p>
            <button
                className="inline-flex items-center justify-center rounded-lg bg-zinc-900 px-4 py-2 text-sm font-medium text-white shadow-sm transition-colors hover:bg-zinc-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-900 focus-visible:ring-offset-2 active:scale-[0.98]"
                onClick={() => setN(n + 1)}>
                Somar 1
            </button>
        </div>
    );
}
