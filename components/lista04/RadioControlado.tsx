//Lista 04 Exercício 10
// Enunciado: radio controlado
// Escolha do turno com dois radios controlados: manhã e tarde. Ambos partilham o mesmo estado.

"use client";

import { useState } from "react";

export default function RadioControlado() {
    const [turno, setTurno] = useState<string>("manha");
    return (
        <div className="mx-auto max-w-xs rounded-xl border border-zinc-200 bg-white p-6 text-center shadow-sm">
            <div className="mb-3 flex justify-center gap-4">
                <label className="flex items-center gap-1.5 text-sm text-zinc-700">
                    <input
                        type="radio"
                        name="turno"
                        className="h-4 w-4 border-zinc-300 text-zinc-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-900 focus-visible:ring-offset-1"
                        checked={turno === "manha"}
                        onChange={() => setTurno("manha")} />
                    Manhã
                </label>
                <label className="flex items-center gap-1.5 text-sm text-zinc-700">
                    <input
                        type="radio"
                        name="turno"
                        className="h-4 w-4 border-zinc-300 text-zinc-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-900 focus-visible:ring-offset-1"
                        checked={turno === "tarde"}
                        onChange={() => setTurno("tarde")} />
                    Tarde
                </label>
            </div>
            <p className="text-sm text-zinc-600">Turno selecionado: {turno === "manha" ? "Manhã" : "Tarde"}</p>
        </div>
    );
}
