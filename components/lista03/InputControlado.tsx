//Lista 03 Exercício 08
// Enunciado: Input controlado
// Um input com value e onChange ligados ao estado. O que você digita aparece abaixo.

"use client";

import { useState } from "react";

export default function InputControlado() {

const [texto, setTexto] = useState<string>("");
    return (
        <div className="text-center mb-4">
            <input className="border rounded px-3 py-2 mb-3"
            value={texto}onChange={(e: React.ChangeEvent<HTMLInputElement>) => setTexto(e.target.value)} />
            <p className="text-xl text-black">{texto}</p>
        </div>
);
}