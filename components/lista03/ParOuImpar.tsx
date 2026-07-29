//Lista 03 Exercício 04
// Enunciado: Par ou ímpar
// A partir do contador, mostre se o número é par ou ímpar usando um ternário.

"use client";

import { useState } from "react";

export default function ParOuImpar() {
    const [n, setN] = useState<number>(0);
    return (
    <div className="text-center">
        <p className="text-3xl font-bold">{n}</p>
        <p className="text-xl text-slate-600 mb-3">{n % 2 === 0 ? "par" : "impar"}</p>
        <button className="bg-cyan-500 hover:bg-cyan-600 text-white font-bold px-4 py-2 rounded-lg" onClick={() => setN(n + 1)}>+1</button>
    </div>
);
}
