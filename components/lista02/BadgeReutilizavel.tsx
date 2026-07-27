// Lista 02 Exercício 17
// Enunciado: Badge reutilizável
// Crie um Badge que recebe texto por prop e use o mesmo componente 3 vezes com textos diferentes.

function Badge({ texto }) {
    return <span className="px-3 py-1 rounded-full bg-cyan-100 text-cyan-800 font-bold">{texto}</span>;
}
function App() {
    return (
        <div className="flex gap-2">
            <Badge texto="Novo" />
            <Badge texto="Promoção" />
            <Badge texto="Últimas" />
        </div>
    );
}