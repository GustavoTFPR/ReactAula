//Lista 03 Exercício 07
// Enunciado: Trocar a cor
// Guarde a cor no estado (string). O botão troca; uma div pinta com style inline.

"use client";

import { useState } from "react";

export default function TrocaCor() {
    const [cor, setCor] = useState<string>("#55C8E6");
    return (
        <div className="mx-auto max-w-xs rounded-xl border border-zinc-200 bg-white p-6 text-center shadow-sm">
            <div
                className="mx-auto mb-4 h-32 w-32 rounded-xl border border-black/5 shadow-inner"
                style={{ backgroundColor: cor }} />
            <div className="flex justify-center gap-2">
                <button
                    className="inline-flex items-center gap-2 rounded-lg border border-zinc-300 bg-white px-4 py-2 text-sm font-medium text-zinc-700 transition-colors hover:bg-zinc-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-300"
                    onClick={() => setCor("#9FD52F")}>
                    <span className="h-2.5 w-2.5 rounded-full" style={{ backgroundColor: "#9FD52F" }} />
                    lima
                </button>
                <button
                    className="inline-flex items-center gap-2 rounded-lg border border-zinc-300 bg-white px-4 py-2 text-sm font-medium text-zinc-700 transition-colors hover:bg-zinc-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-300"
                    onClick={() => setCor("#FF7158")}>
                    <span className="h-2.5 w-2.5 rounded-full" style={{ backgroundColor: "#FF7158" }} />
                    coral
                </button>
            </div>
        </div>
    );
}
