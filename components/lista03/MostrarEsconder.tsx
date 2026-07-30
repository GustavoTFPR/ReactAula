//Lista 03 Exercício 06
// Enunciado: Mostrar / esconder
// Um boolean controla um parágrafo: use && para exibi-lo só quando for true.


"use client";

import { useState } from "react";

export default function MostrarEsconder() {
    const [visivel, setVisivel] = useState<boolean>(false);
    return (
        <div className="text-center mb-4">
            <button className="inline-block bg-blue-500 text-1xl font-bold text-white px-4 py-2 rounded mb-4" 
            onClick={() => setVisivel(!visivel)}>Alternar</button>
            {visivel && <p className="text-xl bg-blue-500 justify-center flex text-white"> Olá, turma!</p>}
        </div>
    );
}