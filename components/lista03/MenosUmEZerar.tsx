//Lista 03 Exercício 03
// Enunciado: −1 e zerar
// Três botões: +1, −1 e zerar (volta a 0). Um único estado number.

"use client";

import { useState } from "react";

export default function MenosUmEZerar() {
    const [n, setN] = useState<number>(0);
    return (
        <div className="mx-auto max-w-xs rounded-xl border border-zinc-200 bg-white p-6 text-center shadow-sm">
            <p className="mb-4 text-4xl font-semibold tracking-tight text-zinc-900">{n}</p>
            <div className="flex justify-center gap-2">
                <button
                    className="inline-flex items-center justify-center rounded-lg bg-zinc-900 px-4 py-2 text-sm font-medium text-white shadow-sm transition-colors hover:bg-zinc-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-900 focus-visible:ring-offset-2 active:scale-[0.98]"
                    onClick={() => setN(n + 1)}>
                    +1
                </button>
                <button
                    className="inline-flex items-center justify-center rounded-lg border border-zinc-300 bg-white px-4 py-2 text-sm font-medium text-zinc-700 transition-colors hover:bg-zinc-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-300"
                    onClick={() => setN(n - 1)}>
                    −1
                </button>
                <button
                    className="inline-flex items-center justify-center rounded-lg px-4 py-2 text-sm font-medium text-zinc-500 transition-colors hover:bg-zinc-100 hover:text-zinc-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-300"
                    onClick={() => setN(0)}>
                    Zerar
                </button>
            </div>
        </div>
    );
}
