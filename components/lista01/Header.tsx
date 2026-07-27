// Lista 01 Exercício 15
// Enunciado: Header da turma
// Crie um Header com o título da turma e uma <nav> com dois links: Início e Turma.

export default function Header() {
    return (
        <header className="flex items-center justify-between bg-slate-800 text-white px-5 py-3 rounded-xl">
            <b>Turma Front-end</b>
            <nav className="flex gap-4">
                <a href="#">Início</a>
                <a href="#">Turma</a>
            </nav>
        </header>
    );
}
