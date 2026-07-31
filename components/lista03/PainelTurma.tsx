//Lista 03 Exercício 20
// Enunciado: Painel da Turma
// A mesma tela das listas anteriores — agora reagindo ao usuário: input + botão para adicionar(spread), botão remover por aluno(filter), marcar presença(toggle no item) e um contador de presentes / total.

"use client";

import { useState } from "react";

export default function PainelTurma() {
    type Aluno = { id: number; nome: string; presente: boolean };
    const [turma, setTurma] = useState<Aluno[]>([{ id: 1, nome: "Ana Carolina", presente: false }]);
    const [nome, setNome] = useState<string>("");
    const add = () => { setTurma([...turma, { id: Date.now(), nome, presente: false }]); setNome(""); };
    const remover = (id: number) => setTurma(turma.filter(a => a.id !== id));
    const alternar = (id: number) => setTurma(turma.map(a => a.id === id ? { ...a, presente: !a.presente } : a));
    const presentes = turma.filter(a => a.presente).length;
    return (
        <div className="text-center">
            <p className="font-bold">{presentes}/{turma.length} presentes</p>
            <input className="border rounded px-2 py-1" value={nome} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setNome(e.target.value)} />
            <button onClick={add} className="inline-block bg-blue-500 text-1xl font-bold text-white px-4 py-2 rounded mb-4">+</button>
            {turma.map(a => (
                <div key={a.id}>
                    <span onClick={() => alternar(a.id)}>{a.presente ? "🟢" : "⚪"} {a.nome}</span>
                    <button onClick={() => remover(a.id)}>✕</button>
                </div>
            ))}
        </div>
    );
}