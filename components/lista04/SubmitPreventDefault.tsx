//Lista 04 Exercício 05
// Enunciado: onSubmit + preventDefault
// Envolva o input num <form> com onSubmit. Sem e.preventDefault() o navegador recarrega a página e você perde o estado.

"use client";

import { useState } from "react";

export default function SubmitPreventDefault() {
    const [nome, setNome] = useState<string>("");

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        alert(`Enviado: ${nome}`);
    };

    return (
        <form
            onSubmit={handleSubmit}
            className="mx-auto max-w-xs rounded-xl border border-zinc-200 bg-white p-6 text-center shadow-sm">
            <input
                className="mb-3 w-full rounded-lg border border-zinc-300 bg-white px-3 py-2 text-sm text-zinc-900 placeholder:text-zinc-400 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-900 focus-visible:ring-offset-1"
                placeholder="Nome"
                value={nome}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setNome(e.target.value)} />
            <button
                type="submit"
                className="inline-flex items-center justify-center rounded-lg bg-zinc-900 px-4 py-2 text-sm font-medium text-white shadow-sm transition-colors hover:bg-zinc-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-900 focus-visible:ring-offset-2 active:scale-[0.98]">
                enviar
            </button>
        </form>
    );
}
