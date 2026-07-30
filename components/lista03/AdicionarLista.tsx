//Lista 04 Exercício 13
// Enunciado: Adicionar à lista
// Estado string[] com dois alunos.Um botão adiciona Manuella Alves com[...turma, novo] e a lista renderiza com.map.

"use client";

import { useState } from "react";

export default function AdicionarLista() {
    const [turma, setTurma] = useState<string[]>(["Ana Carolina", "Daniel Guimarães"]);
    return (
        <div className="text-center">
            <button className="bg-cyan-500 hover:bg-cyan-600 text-white font-bold px-4 py-2 rounded-lg mb-3"
                onClick={() => setTurma([...turma, "Manuella Alves"])}>+ aluno</button>
            <ul>{turma.map((nome, i) => <li key={i}>{nome}</li>)}</ul>
        </div>
    );
}