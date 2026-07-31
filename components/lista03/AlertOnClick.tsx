//Lista 04 Exercício 01
// Enunciado: alert no clique
// Crie um botão que, ao ser clicado, mostra alert("Olá, turma!").

"use client";

export default function AlertOnClique() {
    return (
        <div className="text-center">
            <button
                className="inline-flex items-center justify-center rounded-lg bg-zinc-900 px-4 py-2 text-sm font-medium text-white shadow-sm transition-colors hover:bg-zinc-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-900 focus-visible:ring-offset-2 active:scale-[0.98]"
                onClick={() => alert("Olá, turma!")}>
                Clique aqui
            </button>
        </div>
    );
}
