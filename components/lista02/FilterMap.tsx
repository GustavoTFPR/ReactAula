// Lista 02 Exercício 15
// Enunciado: filter + map
// Só as pessoas ativo: true viram card. Primeiro .filter(), depois .map().

export default function FilterMap() {
    const pessoas = [
        { id: 1, nome: "Ana", ativo: true },
        { id: 2, nome: "Bruno", ativo: false },
        { id: 3, nome: "Carla", ativo: true }
    ];
    return (
        <div className="flex gap-3">
            {pessoas.filter(p => p.ativo).map(p =>
                <div key={p.id} className="bg-white rounded-xl p-4 shadow-md text-slate-800 font-bold">{p.nome}</div>)}
        </div>
    );
}
