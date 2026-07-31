//Lista 03 Exercício 12
// Enunciado: Curtidas num card
// Card do Daniel Guimarães com um botão ❤️ que incrementa o número de curtidas.

"use client";

import { useState } from "react";

export default function CurtidasCard() {
    const [curtidas, setCurtidas] = useState<number>(0);
    return (
        <div className="rounded-xl border border-zinc-200 bg-white p-6 text-center shadow-sm">
            <h3 className="text-sm font-semibold text-zinc-900">Daniel Guimarães</h3>
            <p className="my-3 text-lg text-zinc-700">❤️ <span className="font-semibold text-zinc-900">{curtidas}</span></p>
            <button
                className="inline-flex items-center justify-center gap-1.5 rounded-lg border border-rose-200 bg-rose-50 px-4 py-2 text-sm font-medium text-rose-600 transition-colors hover:bg-rose-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose-300"
                onClick={() => setCurtidas(curtidas + 1)}>
                curtir
            </button>
        </div>
    );
}
