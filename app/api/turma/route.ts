// Rota de API: /api/turma
// Simula uma busca no "banco de dados" e devolve a turma com id, nome, curso e presença.

import { NextResponse } from "next/server";

const turma = [
    { id: 1, nome: "👤 David", curso: "Front-end", presente: true },
    { id: 2, nome: "👤 Thais", curso: "Back-end", presente: false },
    { id: 3, nome: "👤 João", curso: "Design", presente: true },
    { id: 4, nome: "👤 Gustavo", curso: "Mobile", presente: true },
    { id: 5, nome: "👤 Daniel", curso: "Dados", presente: false },
];

export async function GET() {
    return NextResponse.json(turma);
}
