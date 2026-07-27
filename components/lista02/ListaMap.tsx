// Lista 02 Exercício 09
// Enunciado: Lista com .map
// Transforme um array de 3 nomes em vários <li> usando .map().

export default function ListaMap() {
    const nomes = ["Ana", "Bruno", "Carla"];
    return (
        <ul className="text-xl text-slate-700 space-y-1">
            {nomes.map(n => <li key={n}>• {n}</li>)}
        </ul>
    );
}
