// Lista06 - Exercício 02
// Enunciado: Passe uma função nomeada
// Crie a função mostrarNome e entregue-a ao forEach da turma — sem (). O forEach chama para cada aluno.

"use client";

import { useEffect, useState } from "react";

type Aluno = {
    id: number;
    nome: string;
    curso: string;
    presente: boolean;
};

export default function PasseFuncaoNomeada() {
    const [turma, setTurma] = useState<Aluno[]>([]);
    const [saida, setSaida] = useState<string[]>([]);

    useEffect(() => {
        fetch("/api/turma")
            .then((res) => res.json())
            .then((data) => setTurma(data));
    }, []);

    // Função nomeada: recebe UM aluno por vez, exatamente como o forEach chama.
    function mostrarNome(aluno: Aluno) {
        setSaida((atual) => [...atual, aluno.nome]);
    }

    function executar() {
        setSaida([]);
        // Repare: passamos "mostrarNome", sem os parênteses.
        // Com () a função seria chamada na hora; sem (), só a referência é entregue ao forEach.
        turma.forEach(mostrarNome);
    }

    return (
        <div className="mx-auto max-w-xl space-y-5 rounded-2xl border border-violet-200 bg-gradient-to-br from-white via-violet-50 to-slate-50 p-6 shadow-lg ring-1 ring-violet-100">
            <pre className="overflow-x-auto rounded-xl border border-slate-700 bg-slate-900 p-4 text-sm leading-relaxed text-slate-100 shadow-inner whitespace-pre-wrap">
                <span className="text-slate-400">function </span>
                <span className="text-violet-300">mostrarNome</span>
                <span className="text-slate-400">(aluno) {"{"}</span>
                {"\n  "}
                <span className="text-slate-300">console.log(aluno.nome);</span>
                {"\n"}
                <span className="text-slate-400">{"}"}</span>
                {"\n\n"}
                <span className="text-violet-300">turma</span>
                <span className="text-slate-400">.forEach(</span>
                <span className="rounded bg-violet-500/30 px-1.5 py-0.5 font-semibold text-violet-200">mostrarNome</span>
                <span className="text-slate-400">);</span>
            </pre>

            <p className="text-sm leading-relaxed text-slate-700">
                Sem <span className="rounded bg-violet-100 px-1.5 py-0.5 font-mono text-sm font-bold text-violet-700">()</span> depois de{" "}
                <span className="rounded bg-violet-100 px-1.5 py-0.5 font-mono text-sm font-bold text-violet-700">mostrarNome</span>: estamos entregando a{" "}
                <span className="font-bold text-violet-700">referência</span> da função para o forEach chamar depois, uma vez por aluno.
            </p>

            <button
                onClick={executar}
                disabled={turma.length === 0}
                className="w-full rounded-xl bg-violet-600 px-4 py-3 text-sm font-bold text-white shadow-lg shadow-violet-500/30 transition-all duration-200 hover:scale-[1.01] hover:bg-violet-700 hover:shadow-xl hover:shadow-violet-500/40 disabled:cursor-not-allowed disabled:bg-slate-300 disabled:text-slate-500 disabled:shadow-none"
            >
                Executar forEach
            </button>

            {saida.length > 0 && (
                <div className="rounded-xl border border-emerald-200 bg-slate-900 p-4 shadow-inner">
                    <p className="mb-2 text-[10px] font-bold uppercase tracking-[0.25em] text-emerald-300">console.log</p>
                    <ul className="space-y-2">
                        {saida.map((nome, i) => (
                            <li key={i} className="font-mono text-sm text-emerald-300">
                                {nome}
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
}
