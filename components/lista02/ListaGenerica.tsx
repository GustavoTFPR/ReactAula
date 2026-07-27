// Lista 02 Exercício 18
// Enunciado: Lista genérica
// O componente Lista recebe o array pela prop itens — assim serve para qualquer lista.

function Lista({ itens }) {
    return (
        <ul className="text-xl text-slate-700 space-y-1">
            {itens.map(i => <li key={i}>• {i}</li>)}
        </ul>
    );
}