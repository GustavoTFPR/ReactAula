//Lista 04 Exercício 17
// Enunciado: textarea controlada
// Um campo de observação com <textarea value onChange>. Mostre o texto abaixo.

"use client";

import { useState } from "react";

export default function TextareaControlada() {
    const [observacao, setObservacao] = useState<string>("");
    return (
        <div className="mx-auto max-w-xs rounded-xl border border-zinc-200 bg-white p-6 text-center shadow-sm">
            <textarea
                className="mb-3 w-full rounded-lg border border-zinc-300 bg-white px-3 py-2 text-sm text-zinc-900 placeholder:text-zinc-400 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-900 focus-visible:ring-offset-1"
                placeholder="Observação"
                rows={3}
                value={observacao}
                onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => setObservacao(e.target.value)} />
            <p className="text-sm text-zinc-600">{observacao}</p>
        </div>
    );
}
