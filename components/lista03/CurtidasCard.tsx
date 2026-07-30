//Lista 03 Exercício 12
// Enunciado: Curtidas num card
// Card do Daniel Guimarães com um botão ❤️ que incrementa o número de curtidas.

"use client";

import { useState } from "react";

export default function CurtidasCard() {
    const [curtidas, setCurtidas] = useState<number>(0);
    return (
        <div className="bg-white rounded-2xl p-6 shadow-lg text-center">
            <h3 className="text-lg font-bold text-slate-800">Daniel Guimarães</h3>
            <p className="text-xl my-2">❤️ {curtidas}</p>
            <button className="bg-cyan-500 hover:bg-cyan-600 text-white font-bold px-4 py-2 rounded-lg"
                onClick={() => setCurtidas(curtidas + 1)}>curtir</button>
        </div>
    );
}



