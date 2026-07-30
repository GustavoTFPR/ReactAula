//Lista 04 Exercício 14
// Enunciado: Remover aluno
// A partir da lista no estado, um botão remove David Antonio com filter — mantém todos, exceto ele.

"use client";

import { useState } from "react";

export default function RemoverAluno() {
    const [turma, setTurma] = useState<string[]>(["Ana Carolina", "David Antonio", "Silas Pereira"]);
    return (
        <div className="text-center">
            <button className="bg-cyan-500 hover:bg-cyan-600 text-white font-bold px-4 py-2 rounded-lg mb-3"
                onClick={() => setTurma(turma.filter(n => n !== "David Antonio"))}>remover David</button>
            <ul>{turma.map((nome, i) => <li key={i}>{nome}</li>)}</ul>
        </div>
    );
}