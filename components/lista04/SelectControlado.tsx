//Lista 04 Exercício 08
// Enunciado: select controlado
// Um <select> controlado para o curso, com opções Front-end, Back-end, Design, Mobile e Dados.

"use client";

import { useState } from "react";

export default function SelectControlado() {
    const [curso, setCurso] = useState<string>("Front-end");
    return (
        <div className="mx-auto max-w-xs rounded-xl border border-zinc-200 bg-white p-6 text-center shadow-sm">
            <select
                className="mb-3 w-full rounded-lg border border-zinc-300 bg-white px-3 py-2 text-sm text-zinc-900 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-900 focus-visible:ring-offset-1"
                value={curso}
                onChange={(e: React.ChangeEvent<HTMLSelectElement>) => setCurso(e.target.value)}>
                <option>Front-end</option>
                <option>Back-end</option>
                <option>Design</option>
                <option>Mobile</option>
                <option>Dados</option>
            </select>
            <p className="text-sm text-zinc-600">Curso escolhido: {curso}</p>
        </div>
    );
}
