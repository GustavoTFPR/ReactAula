// Lista 01 Exercício 20
// Enunciado: Mural da Turma
// Junte tudo num Mural estático: um Header, um Contador, vários cards com nomes reais diferentes e um Rodape.Repare: repetimos muito código só pra trocar o nome — a Aula 12 resolve isso com props.

function Header() { return <header className="bg-slate-800 text-white px-5 py-3 rounded-xl font-bold w-full text-center">Mural da Turma</header>; }
function Contador() { return <span className="px-4 py-1 rounded-full bg-cyan-100 text-cyan-800 font-bold">11 alunos</span>; }
function Rodape() { return <footer className="text-slate-500 text-sm">© 2026 · Firjan SENAI</footer>; }
function Mural() {
    return (
        <div className="flex flex-col gap-3 items-center">
            <Header />
            <Contador />
            <div className="flex flex-wrap gap-3 justify-center">
                <div className="bg-white rounded-xl px-4 py-2 shadow-md text-slate-800 font-bold">Ana Carolina</div>
                <div className="bg-white rounded-xl px-4 py-2 shadow-md text-slate-800 font-bold">Daniel Guimarães</div>
                <div className="bg-white rounded-xl px-4 py-2 shadow-md text-slate-800 font-bold">Manuella Alves</div>
                <div className="bg-white rounded-xl px-4 py-2 shadow-md text-slate-800 font-bold">Silas Pereira</div>
            </div>
            <Rodape />
        </div>
    );
}