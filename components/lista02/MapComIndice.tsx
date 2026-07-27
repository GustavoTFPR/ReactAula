// Lista 02 Exercício 12
// Enunciado: .map com índice
// Numere a lista usando o segundo parâmetro do .map((n, i) => ...).

export default function MapComIndice() {
    const nomes = ["Ana", "Bruno", "Carla"];
    return (
        <ol className="text-xl text-slate-700 space-y-1">
            {nomes.map((n, i) => <li key={i}>{i + 1}. {n}</li>)}
        </ol>
    );
}
