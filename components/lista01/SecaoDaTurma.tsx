// Lista 01 Exercício 17
//Enunciado: SecaoTurma
// Crie uma SecaoTurma com um < section > contendo um heading e um parágrafo sobre a turma.

function SecaoTurma() {
    return (
        <section>
            <h2 className="text-2xl font-bold text-slate-800">Sobre a turma</h2>
            <p className="text-slate-500">Programador Front-End na Firjan SENAI, 2026.</p>
        </section>
    );
}