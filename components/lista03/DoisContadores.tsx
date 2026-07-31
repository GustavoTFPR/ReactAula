//Lista 03 Exercício 16
// Enunciado: Dois contadores
// Dois estados separados(Front - end e Back - end) com dois botões.Cada um conta de forma independente.

"use client";

import { useState } from "react";

export default function DoisContadores() {
    const [front, setFront] = useState<number>(0);
    const [back, setBack] = useState<number>(0);
    return (
        <div className="flex gap-6 justify-center text-center mb-4">
            <div><p className="text-2xl text-black font-bold mb-2">Front {front}</p>
                <button className="inline-block bg-blue-500 text-1xl font-bold text-white px-4 py-2 rounded mb-4" onClick={() => setFront(front + 1)}>+1</button></div>
            <div><p className="text-2xl text-black font-bold mb-2">Back {back}</p>
                <button className="inline-block bg-blue-500 text-1xl font-bold text-white px-4 py-2 rounded mb-4" onClick={() => setBack(back + 1)}>+1</button></div>
        </div>
    );
}