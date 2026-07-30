//Lista 03 Exercício 07
// Enunciado: Trocar a cor
// Guarde a cor no estado (string). O botão troca; uma div pinta com style inline.

"use client";

import { useState } from "react";

export default function TrocaCor() {
    const [cor, setCor] = useState<string>("#55C8E6");
        return (
            <div className="text-center mb-4">
                <div className="w-32 h-32 rounded-2xl mx-auto mb-3" style={{ backgroundColor: cor }}></div>
                    <div className="flex gap-2 justify-center">
                        <button className="bg-cyan-500 hover:bg-cyan-600 text-white font-bold px-4 py-2 rounded" onClick={() => setCor("#9FD52F")}>lima</button>
                        <button className="bg-cyan-500 hover:bg-cyan-600 text-white font-bold px-4 py-2 rounded" onClick={() => setCor("#FF7158")}>coral</button>
                </div>
            </div>
);
}