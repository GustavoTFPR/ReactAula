// Lista 01 Exercício 10
//Enunciado: Template string
// Junte nome e curso numa mesma linha usando template string (crases) dentro das chaves.

function Page() {
    const nome = "Manuella Alves";
    const curso = "Design";
    return <p className="text-xl text-slate-700">{`${nome} — ${curso}`}</p>;
}