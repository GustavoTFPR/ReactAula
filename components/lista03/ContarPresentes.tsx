//Lista 04 Exercício 15
// Enunciado: Contar presentes
// Um array de alunos com presente: boolean no estado.Mostre no topo quantos estão presentes — derivado do estado.

"use client";

import { useState } from "react";

export default function ContarPresentes() {
    type Aluno = { id: number; nome: string; presente: boolean };
    const [alunos] = useState<Aluno[]>([
        { id: 1, nome: "Ana Carolina", presente: true },
        { id: 2, nome: "Gustavo Tavares", presente: false },
        { id: 3, nome: "Thais Resende", presente: true },
    ]);
    const presentes = alunos.filter(a => a.presente).length;
    return <p className="text-2xl font-bold">{presentes} presente(s)</p>;
}