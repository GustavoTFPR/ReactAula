//Lista 03 Exercício 11
// Enunciado: Marcar presença
// Card da Ana Carolina com um botão que alterna a presença: 🟢 presente / ⚪ ausente.

"use client";

import { useState } from "react";

export default function MarcarPresenca() {
    const [presente, setPresente] = useState<boolean>(false);
    return (
        <div className="bg-white rounded-2xl p-6 shadow-lg text-center">
            <h3 className="text-lg font-bold text-slate-800">Ana Carolina</h3>
            <p className="text-3xl my-2">{presente ? "🟢" : "⚪"}</p>
            <button className="bg-cyan-500 hover:bg-cyan-600 text-white font-bold px-4 py-2 rounded-lg"
                onClick={() => setPresente(!presente)}>marcar</button>
        </div>
    );
}