// Lista 01 Exercício 09
// Enunciado: { } com variável
// Crie uma variável nome com "Daniel Guimarães" e mostre-a no JSX usando {"{nome}"}.

export default function ChavesComVariavel() {
    const nome = "Daniel Guimarães";
    return <h2 className="text-2xl font-bold text-slate-800">Aluno: {nome}</h2>;
}
