//Lista 03 Exercício 11
// Enunciado: Marcar presença
// Card da Ana Carolina com um botão que alterna a presença: 🟢 presente / ⚪ ausente.

"use client";

import { useState } from "react";

export default function MarcarPresenca() {
    const [presente, setPresente] = useState<boolean>(false);
    return (
        <div className="rounded-xl border border-zinc-200 bg-white p-6 text-center shadow-sm">
            <h3 className="text-sm font-semibold text-zinc-900">Ana Carolina</h3>
            <span className={`my-3 inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-medium ${presente ? "bg-emerald-50 text-emerald-700" : "bg-zinc-100 text-zinc-500"}`}>
                {presente ? "🟢" : "⚪"} {presente ? "presente" : "ausente"}
            </span>
            <button
                className="block w-full rounded-lg bg-zinc-900 px-4 py-2 text-sm font-medium text-white shadow-sm transition-colors hover:bg-zinc-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-900 focus-visible:ring-offset-2 active:scale-[0.98]"
                onClick={() => setPresente(!presente)}>
                marcar
            </button>
        </div>
    );
}
