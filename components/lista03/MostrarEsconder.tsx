//Lista 03 Exercício 06
// Enunciado: Mostrar / esconder
// Um boolean controla um parágrafo: use && para exibi-lo só quando for true.

"use client";

import { useState } from "react";

export default function MostrarEsconder() {
    const [visivel, setVisivel] = useState<boolean>(false);
    return (
        <div className="mx-auto max-w-xs rounded-xl border border-zinc-200 bg-white p-6 text-center shadow-sm">
            <button
                className="mb-4 inline-flex items-center justify-center rounded-lg bg-zinc-900 px-4 py-2 text-sm font-medium text-white shadow-sm transition-colors hover:bg-zinc-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-900 focus-visible:ring-offset-2 active:scale-[0.98]"
                onClick={() => setVisivel(!visivel)}>
                Alternar
            </button>
            {visivel && <p className="text-sm text-zinc-600">Olá, turma!</p>}
        </div>
    );
}
