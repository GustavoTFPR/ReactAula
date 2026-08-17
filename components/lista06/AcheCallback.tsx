// Lista 06 - Exercício 01
// Enunciado: Ache o callback
// No código abaixo, aponte qual parte é o callback — a função que o forEach recebe e chama para cada aluno.
// turma.forEach(aluno => console.log(aluno.nome));

"use client";

type Aluno = {
    id: number;
    nome: string;
    curso: string;
    presente: boolean;
};

const turma: Aluno[] = [
    { id: 1, nome: "David", curso: "Front-end", presente: true },
    { id: 2, nome: "Thais", curso: "Back-end", presente: false },
    { id: 3, nome: "João", curso: "Design", presente: true },
    { id: 4, nome: "Gustavo", curso: "Mobile", presente: true },
];

export default function AcheCallback() {
    const nomes = turma.map((aluno) => aluno.nome);

    return (
        <div className="mx-auto max-w-xl space-y-5 rounded-2xl border border-violet-200 bg-gradient-to-br from-white via-violet-50 to-slate-50 p-6 shadow-lg ring-1 ring-violet-100">
            <p className="text-base font-medium leading-relaxed text-slate-700">
                O <span className="rounded-md bg-violet-100 px-1.5 py-0.5 font-mono text-base font-bold text-violet-700">callback</span> é a função
                que o <span className="rounded-md bg-violet-100 px-1.5 py-0.5 font-mono text-base font-bold text-violet-700">forEach</span> chama
                para cada item da lista.
            </p>

            <pre className="overflow-x-auto rounded-xl border border-slate-700 bg-slate-900 p-4 text-sm leading-relaxed text-slate-100 shadow-inner">
                {`turma.forEach((aluno) => console.log(aluno.nome));`}
            </pre>

            <div className="rounded-xl border border-emerald-200 bg-slate-900 p-4 text-left shadow-inner">
                <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.25em] text-emerald-300">callback</p>
                <ul className="space-y-2">
                    {nomes.map((nome, index) => (
                        <li key={index} className="font-mono text-sm text-emerald-300">
                            {nome}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}
