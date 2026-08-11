// Lista 05 Exercício 04
// Enunciado: Tipar a resposta
// Crie o tipo Aluno e use-o no estado: useState<Aluno[]>([]). Depois mostre nome + curso de cada aluno.

"use client";

type Aluno = {
    nome: string;
    curso: string;
};

export default function TiparResposta() {
    const alunos: Aluno[] = [
        { nome: "👤 David", curso: "Engenharia" },
        { nome: "👤 Thais", curso: "Medicina" },
        { nome: "👤 João", curso: "Direito" },
        { nome: "👤 Gustavo", curso: "Astrologia" },
        { nome: "👤 Daniel", curso: "Filosofia" },
    ];

    return (
        <div className="mx-auto max-w-sm rounded-xl border border-zinc-200 bg-white p-6 shadow-sm">
            <ul className="space-y-2">
                {alunos.map((aluno, index) => (
                    <li
                        key={index}
                        className="rounded-lg border border-zinc-100 bg-zinc-50 px-4 py-2.5">
                        <p className="text-sm font-medium text-zinc-900">{aluno.nome}</p>
                        <p className="text-xs text-zinc-500">{aluno.curso}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
}
