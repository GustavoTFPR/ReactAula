// Lista 02 Exercício 14
// Enunciado: Ternário no JSX
// Mostre "🟢 online" ou "⚪ offline" conforme a prop online, usando um ternário dentro do JSX.

function Status({ online }) {
    return (
        <p className="text-lg">
            {online
                ? <span className="text-green-600 font-bold">🟢 online</span>
                : <span className="text-slate-400">⚪ offline</span>}
        </p>
    );
}