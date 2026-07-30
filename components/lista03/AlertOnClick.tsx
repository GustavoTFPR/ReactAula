//Lista 04 Exercício 01
// Enunciado: alert no clique
// Crie um botão que, ao ser clicado, mostra alert("Olá, turma!").

"use client";

export default function AlertOnClique() {
    return (
        <button className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded mb-8" onClick={() => alert("Olá, turma!")}>
            Clique aqui
        </button>
    )
}