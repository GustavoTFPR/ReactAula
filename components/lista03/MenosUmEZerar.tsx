//Lista 03 Exercício 03
// Enunciado: −1 e zerar
// Três botões: +1, −1 e zerar (volta a 0). Um único estado number.

"use client";

import { useState } from "react";

export default function MenosUmEZerar() {
        const [n, setN] = useState<number>(0);
        return (
            <div className="text-center mb-8">
                <p className="text-2xl block bg-blue-500 font-bold mb-4">Contador: {n}</p>
                <div className="flex gap-2 justify-center">
                    <button className="bg-blue-500 text-1xl font-bold text-white px-4 py-2 rounded" onClick={() => setN(n + 1)}>Somar 1</button>
                    <button className="bg-blue-500 text-1xl font-bold text-white px-4 py-2 rounded" onClick={() => setN(n - 1)}>Diminuir 1</button>
                    <button className="bg-blue-500 text-1xl font-bold text-white px-4 py-2 rounded" onClick={() => setN(0)} >Zerar</button>
                </div>
            </div>
    )
}