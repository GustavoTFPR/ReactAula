//Lista 04 Exercício 14
// Enunciado: Remover aluno
// A partir da lista no estado, um botão remove David Antonio com filter — mantém todos, exceto ele.

"use client";

import { useState } from "react";

export default function RemoverAluno() {
    const [turma, setTurma] = useState<string[]>(["Ana Carolina", "David Antonio", "Silas Pereira"]);
    return (
        <div className="text-center">
            <button className="inline-block bg-blue-500 text-1xl font-bold text-white px-4 py-2 rounded mb-4"
                onClick={() => setTurma(turma.filter(n => n !== "David Antonio"))}>remover David</button>
            <ul>{turma.map((nome, i) => <li key={i}>{nome}</li>)}</ul>
        </div>
    );
}