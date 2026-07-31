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
            <button className="inline-block bg-blue-500 text-1xl font-bold text-white px-4 py-2 rounded mb-4"
                onClick={() => setPresente(!presente)}>marcar</button>
        </div>
    );
}