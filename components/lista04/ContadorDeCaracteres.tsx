//Lista 04 Exercício 12
// Enunciado: Contador de caracteres
// Abaixo do input de nome, mostre {form.nome.length} — quantas letras já foram digitadas.

"use client";

import { useState } from "react";

export default function ContadorDeCaracteres() {
    const [form, setForm] = useState<{ nome: string }>({ nome: "" });
    return (
        <div className="mx-auto max-w-xs rounded-xl border border-zinc-200 bg-white p-6 text-center shadow-sm">
            <input
                className="mb-3 w-full rounded-lg border border-zinc-300 bg-white px-3 py-2 text-sm text-zinc-900 placeholder:text-zinc-400 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-900 focus-visible:ring-offset-1"
                placeholder="Nome"
                value={form.nome}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setForm({ ...form, nome: e.target.value })} />
            <p className="text-sm text-zinc-500">{form.nome.length} caractere(s)</p>
        </div>
    );
}
