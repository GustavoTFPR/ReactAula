// Lista 05 Exercício 08
// Enunciado: Checar res.ok
// O fetch não falha sozinho em 404. Cheque !res.ok e trate como erro. Aqui buscamos um id inexistente para ver a mensagem.

"use client";

import { useState } from "react";

export default function ChecarRes() {
    const [carregando, setCarregando] = useState(false);
    const [erro, setErro] = useState<string | null>(null);
    const [status, setStatus] = useState<number | null>(null);

    const buscar = async () => {
        setCarregando(true);
        setErro(null);
        setStatus(null);

        try {
            const resposta = await fetch("https://jsonplaceholder.typicode.com/users/9999"); // ID inexistente
            setStatus(resposta.status);

            if (!resposta.ok) {
                throw new Error(`Erro na requisição: ${resposta.status} ${resposta.statusText}`);
            }

            const dados = await resposta.json();
            console.log(dados);
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
                {carregando ? "Buscando..." : "Buscar Usuário Inexistente"}
            </button>

            {status && (
                <p className="text-xs text-zinc-500">
                    resposta.ok:{" "}
                    <span className="font-mono font-semibold text-zinc-700">
                        {status >= 200 && status < 300 ? "true" : "false"}
                    </span>{" "}
                    • status: <span className="font-mono font-semibold text-zinc-700">{status}</span>
                </p>
            )}

            {erro && (
                <div className="rounded-lg border border-red-200 bg-red-50 px-4 py-2.5">
                    <p className="text-xs font-semibold text-red-700 mb-0.5">Erro capturado no catch</p>
                    <p className="text-sm text-red-600">{erro}</p>
                </div>
            )}
        </div>
    );
}