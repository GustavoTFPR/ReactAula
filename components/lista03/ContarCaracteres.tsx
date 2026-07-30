//Lista 03 Exercício 09
// Enunciado: Contar caracteres
// Três botões: A partir do input controlado, mostre {texto.length} — quantas letras já foram digitadas.

"use client";

import { useState } from "react";

export default function ContarCaracteres() {
    const [texto, setTexto] = useState<string>("");
    return (
    <div className="text-center mb-4">
        <input className="border rounded-lg px-3 py-2 mb-3"
        value={texto}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setTexto(e.target.value)} />
        <p className="text-xl text-slate-700">{texto.length} caractere(s)</p>
    </div>
);
}



