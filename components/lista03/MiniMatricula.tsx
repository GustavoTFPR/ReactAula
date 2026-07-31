//Lista 03 Exercício 19
// Enunciado: Mini-matrícula
// Input controlado + botão que adiciona o nome digitado à turma(spread) e limpa o input.A lista cresce com.map + key.

"use client";

import { useState } from "react";

export default function MiniMatricula() {
    const [nome, setNome] = useState<string>("");
    const [turma, setTurma] = useState<string[]>([]);
    const adicionar = () => { setTurma([...turma, nome]); setNome(""); };
    return (
        <div className="text-center mb-4">
            <input className="border rounded-lg px-3 py-2" value={nome}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setNome(e.target.value)} />
            <button className="inline-block bg-blue-500 text-1xl font-bold text-white px-4 py-2 rounded mb-4" onClick={adicionar}>matricular</button>
            <ul className="mt-3">{turma.map((n, i) => <li key={i}>{n}</li>)}</ul>
        </div>
    );
}