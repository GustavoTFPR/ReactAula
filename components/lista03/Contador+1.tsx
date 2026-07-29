//Lista 03 Exercício 02
// Enunciado: Contador +1
// Guarde um número no estado com useState<number>(0). Um botão soma 1 e a tela mostra o valor.

"use client";

import { useState } from "react";

export default function ContadorMaisUm() {
        const [n, setN] = useState<number>(0);
        return (
            <div className="bg-blue-500 font-bold rounded text-center mb-8 py-4">
                <p className="text-2xl font-bold mb-4 text-white">Contador: {n}</p>
                <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded" onClick={() => setN(n + 1)}>Somar 1</button>
            </div>
);
}