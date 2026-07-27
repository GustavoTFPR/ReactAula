// Lista 01 Exercício 18
// Enunciado: Aninhar componentes
// Monte uma Pagina que junta Header + CardAluno + Rodape numa coluna.

function Header() { return <header className="bg-slate-800 text-white px-5 py-3 rounded-xl font-bold">Turma Front-end</header>; }
function CardAluno() { return <div className="bg-white rounded-xl px-6 py-4 shadow-md text-slate-800 font-bold">João Eduardo</div>; }
function Rodape() { return <footer className="text-slate-500 text-sm">© 2026 · Firjan SENAI</footer>; }

export default function AninharComponentes() {
    return (
        <div className="flex flex-col gap-3 items-center">
            <Header />
            <CardAluno />
            <Rodape />
        </div>
    );
}
