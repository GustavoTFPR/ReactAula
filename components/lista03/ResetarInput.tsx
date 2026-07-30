//Lista 03 Exercício 10
// Enunciado: Resetar o input
// Três botões: Acrescente um botão que limpa o campo com setTexto(""). Como é controlado, o input esvazia sozinho.

"use client";

import { useState } from "react";

export default function ResetarInput() {
    const [texto, setTexto] = useState<string>("");
    return (
        <div className="text-center flex flex-col gap-3 items-center">
            <input className="border rounded-lg px-3 py-2"
            value={texto}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setTexto(e.target.value)} />
            <button className="bg-cyan-500 hover:bg-cyan-600 text-white font-bold px-4 py-2 rounded-lg"
            onClick={() => setTexto("")}>limpar</button>
        </div>
    );
}


