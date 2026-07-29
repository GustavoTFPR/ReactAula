//Lista 03 Exercício 03
// Enunciado: −1 e zerar
// Três botões: +1, −1 e zerar (volta a 0). Um único estado number.

"use client";

import { useState } from "react";

export default function MenosUmEZerar() {
        const [n, setN] = useState<number>(0);
        return (
            <div className="bg-blue-500 text-center">
                <p className="text-2xl font-bold mb-4">Contador: {n}</p>
                <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded" onClick={() => setN(n + 1)}>Somar 1</button>
                <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded" onClick={() => setN(n - 1)}>Diminuir 1</button>
                <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded" onClick={() => setN(0)} >Zerar</button>
            </div>
    )
}