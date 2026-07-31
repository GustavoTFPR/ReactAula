//Lista 03 Exercício 05
// Enunciado: Toggle liga/desliga
// Um estado boolean. O botão alterna e a tela mostra 🟢 (ligado) ou ⚪ (desligado).

"use client";

import { useState } from "react";

export default function ToggleLigaDesliga() {
    const [ligado, setLigado] = useState<boolean>(false);
    return (
        <div className="mx-auto max-w-xs rounded-xl border border-zinc-200 bg-white p-6 text-center shadow-sm">
            <span className={`mb-4 inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-medium ${ligado ? "bg-emerald-50 text-emerald-700" : "bg-zinc-100 text-zinc-500"}`}>
                {ligado ? "🟢" : "⚪"} {ligado ? "ligado" : "desligado"}
            </span>
            <button
                className="mt-4 block w-full rounded-lg bg-zinc-900 px-4 py-2 text-sm font-medium text-white shadow-sm transition-colors hover:bg-zinc-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-900 focus-visible:ring-offset-2 active:scale-[0.98]"
                onClick={() => setLigado(!ligado)}>
                Alternar
            </button>
        </div>
    );
}
