// Lista 01 Exercício 05
// Enunciado: Usar os dois
// Defina Titulo e Rodape e monte uma Page que usa os dois dentro de um <div>.

function Titulo() {
    return <h1 className="text-2xl font-bold text-slate-800">Turma Front-end</h1>;
}

function Rodape() {
    return <footer className="text-slate-500">© 2026 · Firjan SENAI</footer>;
}

export default function UsarOsDois() {
    return (
        <div className="text-center">
            <Titulo />
            <Rodape />
        </div>
    );
}
