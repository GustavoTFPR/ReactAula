// Lista 01 Exercício 06
// Enunciado: CardAluno fixo
// Crie um CardAluno com foto (emoji), nome e curso chumbados: Ana Carolina · Front-end.

function CardAluno() {
    return (
        <div className="bg-white rounded-2xl p-6 shadow-lg text-center">
            <div className="text-4xl">👩‍💻</div>
            <h3 className="text-xl font-bold text-slate-800">Ana Carolina</h3>
            <p className="text-slate-500">Front-end</p>
        </div>
    );
}