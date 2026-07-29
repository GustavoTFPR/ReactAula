//Lista 03 Exercício 05
// Enunciado: Toggle liga/desliga
// Um estado boolean. O botão alterna e a tela mostra 🟢 (ligado) ou ⚪ (desligado).

"use client";

import { useState } from "react";

export default function ToggleLigaDesliga() {
    const [ligado, setLigado] = useState<boolean>(false);
    return (
        <div className="text-center">
            <p className="text-2xl font-bold mb-4">{ligado ? "🟢" : "⚪"}</p>
            <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded" onClick={() => setLigado(!ligado)}>Alternar</button>
        </div>
    );
}