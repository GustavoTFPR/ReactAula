//Lista 04 Exercício 16
// Enunciado: Campo número
// Um campo nota com type="number". O input sempre dá string — converta com Number(e.target.value).

"use client";

import { useState } from "react";

export default function CampoNumero() {
    const [nota, setNota] = useState<number>(0);
    return (
        <div className="mx-auto max-w-xs rounded-xl border border-zinc-200 bg-white p-6 text-center shadow-sm">
            <input
                type="number"
                className="mb-3 w-full rounded-lg border border-zinc-300 bg-white px-3 py-2 text-sm text-zinc-900 placeholder:text-zinc-400 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-900 focus-visible:ring-offset-1"
                placeholder="Nota"
                value={nota}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setNota(Number(e.target.value))} />
            <p className="text-sm text-zinc-600">Nota: {nota}</p>
        </div>
    );
}
