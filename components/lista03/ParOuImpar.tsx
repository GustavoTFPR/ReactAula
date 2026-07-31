//Lista 03 Exercício 04
// Enunciado: Par ou ímpar
// A partir do contador, mostre se o número é par ou ímpar usando um ternário.

"use client";

import { useState } from "react";

export default function ParOuImpar() {
    const [n, setN] = useState<number>(0);
    return (
        <div className="mx-auto max-w-xs rounded-xl border border-zinc-200 bg-white p-6 text-center shadow-sm">
            <p className="text-4xl font-semibold tracking-tight text-zinc-900">{n}</p>
            <span className={`mb-4 mt-2 inline-flex items-center rounded-full px-2.5 py-1 text-xs font-medium ${n % 2 === 0 ? "bg-indigo-50 text-indigo-700" : "bg-amber-50 text-amber-700"}`}>
                {n % 2 === 0 ? "par" : "ímpar"}
            </span>
            <button
                className="mt-4 block w-full rounded-lg bg-zinc-900 px-4 py-2 text-sm font-medium text-white shadow-sm transition-colors hover:bg-zinc-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-900 focus-visible:ring-offset-2 active:scale-[0.98]"
                onClick={() => setN(n + 1)}>
                +1
            </button>
        </div>
    );
}
