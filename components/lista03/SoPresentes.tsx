//Lista 03 Exercício 17
// Enunciado: Só os presentes
// Um boolean no estado liga um filtro visual: quando ligado, o.map mostra só quem está presente(ternário / &&).

"use client";

import { useState } from "react";

export default function SoPresentes() {
    type Aluno = { id: number; nome: string; presente: boolean };
    const [so, setSo] = useState<boolean>(false);
    const [alunos] = useState<Aluno[]>([
        { id: 1, nome: "João Eduardo", presente: true },
        { id: 2, nome: "Luis Felipe", presente: false },
    ]);
    return (
        <div className="text-center mb-4">
            <button className="inline-block bg-blue-500 text-1xl font-bold text-white px-4 py-2 rounded mb-4" onClick={() => setSo(!so)}>só presentes</button>
            <ul>{alunos.map(a => (!so || a.presente) && <li key={a.id}>{a.nome}</li>)}</ul>
        </div>
    );
}