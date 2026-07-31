//Lista 04 Exercício 09
// Enunciado: checkbox controlado
// Um campo bolsista booleano. O checkbox usa checked e lê e.target.checked (não value).

"use client";

import { useState } from "react";

export default function CheckboxControlado() {
    const [bolsista, setBolsista] = useState<boolean>(false);
    return (
        <div className="mx-auto max-w-xs rounded-xl border border-zinc-200 bg-white p-6 text-center shadow-sm">
            <label className="mb-3 flex items-center justify-center gap-2 text-sm text-zinc-700">
                <input
                    type="checkbox"
                    className="h-4 w-4 rounded border-zinc-300 text-zinc-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-900 focus-visible:ring-offset-1"
                    checked={bolsista}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setBolsista(e.target.checked)} />
                Bolsista
            </label>
            <p className="text-sm text-zinc-600">{bolsista ? "É bolsista" : "Não é bolsista"}</p>
        </div>
    );
}
