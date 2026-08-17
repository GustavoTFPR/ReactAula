// Lista 05 - Exercício 07
// Enunciado: Tratar erro
// Envolva a busca num try/catch. Guarde a falha num estado useState<string | null>(null) e mostre a mensagem em vermelho.

"use client";

import { useState } from "react";

type Usuario = {
    id: number;
    name: string;
};

export default function TratarErro() {
    const [carregando, setCarregando] = useState(false);
    const [erro, setErro] = useState<string | null>(null);
    const [usuarios, setUsuarios] = useState<Usuario[] | null>(null);

    const buscar = async () => {
        setCarregando(true);
        setErro(null);
        setUsuarios(null);

        try {
            const resposta = await fetch("https://jsonplaceholder.typicode.com/users");
            if (!resposta.ok) {
                throw new Error("Erro na requisição");
            }
            const dados = await resposta.json();
            setUsuarios(dados);
        } catch (error) {
            setErro((error as Error).message);
        } finally {
            setCarregando(false);
        }
    };

    return (
        <div className="mx-auto max-w-sm rounded-xl border border-zinc-200 bg-white p-6 shadow-sm space-y-4">
            <button
                onClick={buscar}
                disabled={carregando}
                className="inline-flex w-full items-center justify-center rounded-lg bg-zinc-900 px-4 py-2 text-sm font-medium text-white shadow-sm transition-colors hover:bg-zinc-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-900 focus-visible:ring-offset-2 active:scale-[0.98] disabled:opacity-50">
                {carregando ? "Buscando..." : "Buscar Usuários"}
            </button>

            {erro && (
                <div className="rounded-lg border border-red-200 bg-red-50 px-4 py-2.5">
                    <p className="text-xs font-semibold text-red-700 mb-0.5">Erro capturado no catch</p>
                    <p className="text-sm text-red-600">{erro}</p>
                </div>
            )}

            {usuarios && (
                <div className="rounded-lg border border-green-200 bg-green-50 px-4 py-2.5">
                    <p className="text-xs font-semibold text-green-700 mb-0.5">Sucesso</p>
                    <p className="text-sm text-green-700">
                        {usuarios.length} usuários encontrados: {usuarios.map((u) => u.name).join(", ")}
                    </p>
                </div>
            )}
        </div>
    );
}