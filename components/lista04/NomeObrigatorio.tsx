//Lista 04 Exercício 07
// Enunciado: Nome obrigatório
// No submit, se form.nome estiver vazio, dê alert("Preencha o nome") e return — não continua.

"use client";

import { useState } from "react";

export default function NomeObrigatorio() {
    const [form, setForm] = useState<{ nome: string }>({ nome: "" });
    const [enviado, setEnviado] = useState<string>("");

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (form.nome === "") {
            alert("Preencha o nome");
            return;
        }
        setEnviado(form.nome);
    };

    return (
        <form
            onSubmit={handleSubmit}
            className="mx-auto max-w-xs rounded-xl border border-zinc-200 bg-white p-6 text-center shadow-sm">
            <input
                className="mb-3 w-full rounded-lg border border-zinc-300 bg-white px-3 py-2 text-sm text-zinc-900 placeholder:text-zinc-400 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-900 focus-visible:ring-offset-1"
                placeholder="Nome"
                value={form.nome}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setForm({ ...form, nome: e.target.value })} />
            <button
                type="submit"
                className="mb-3 inline-flex items-center justify-center rounded-lg bg-zinc-900 px-4 py-2 text-sm font-medium text-white shadow-sm transition-colors hover:bg-zinc-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-900 focus-visible:ring-offset-2 active:scale-[0.98]">
                enviar
            </button>
            {enviado && (
                <div className="rounded-lg border border-zinc-100 bg-zinc-50 px-4 py-2.5 text-sm text-zinc-700">
                    Cadastrado: {enviado}
                </div>
            )}
        </form>
    );
}
