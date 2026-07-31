//Lista 03 Exercício 16
// Enunciado: Dois contadores
// Dois estados separados (Front-end e Back-end) com dois botões. Cada um conta de forma independente.

"use client";

import { useState } from "react";

export default function DoisContadores() {
    const [front, setFront] = useState<number>(0);
    const [back, setBack] = useState<number>(0);
    return (
        <div className="flex justify-center gap-4">
            <div className="w-36 rounded-xl border border-zinc-200 bg-white p-6 text-center shadow-sm">
                <p className="mb-1 text-xs font-medium uppercase tracking-wide text-zinc-500">Front-end</p>
                <p className="mb-3 text-3xl font-semibold tracking-tight text-zinc-900">{front}</p>
                <button
                    className="inline-flex items-center justify-center rounded-lg bg-zinc-900 px-4 py-2 text-sm font-medium text-white shadow-sm transition-colors hover:bg-zinc-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-900 focus-visible:ring-offset-2 active:scale-[0.98]"
                    onClick={() => setFront(front + 1)}>
                    +1
                </button>
            </div>
            <div className="w-36 rounded-xl border border-zinc-200 bg-white p-6 text-center shadow-sm">
                <p className="mb-1 text-xs font-medium uppercase tracking-wide text-zinc-500">Back-end</p>
                <p className="mb-3 text-3xl font-semibold tracking-tight text-zinc-900">{back}</p>
                <button
                    className="inline-flex items-center justify-center rounded-lg bg-zinc-900 px-4 py-2 text-sm font-medium text-white shadow-sm transition-colors hover:bg-zinc-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-900 focus-visible:ring-offset-2 active:scale-[0.98]"
                    onClick={() => setBack(back + 1)}>
                    +1
                </button>
            </div>
        </div>
    );
}
