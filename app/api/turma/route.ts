// Rota de API: /api/turma
// Simula uma busca no "banco de dados" e devolve a turma com id, nome e curso.

import { NextResponse } from "next/server";

const turma = [
    { id: 1, nome: "👤 David", curso: "Front-end" },
    { id: 2, nome: "👤 Thais", curso: "Back-end" },
    { id: 3, nome: "👤 João", curso: "Design" },
    { id: 4, nome: "👤 Gustavo", curso: "Mobile" },
    { id: 5, nome: "👤 Daniel", curso: "Dados" },
];

export async function GET() {
    return NextResponse.json(turma);
}
