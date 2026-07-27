// Lista 02 Exercício 19
// Enunciado: Grade de cards
// Um array de 6 objetos {id, nome, vip} vira uma grade de cards; mostre ⭐ quando vip.

type CardProps = {
    nome: string;
    vip: boolean;
};

function Card({ nome, vip }: CardProps) {
    return (
        <div className="bg-white rounded-2xl p-4 shadow-lg text-center w-28">
            <p className="font-bold text-slate-800">{nome}</p>
            {vip && <span className="text-amber-500">⭐</span>}
        </div>
    );
}

export default function GradeDeCards() {
    const gente = [
        { id: 1, nome: "Ana", vip: true },
        { id: 2, nome: "Bruno", vip: false },
        { id: 3, nome: "Carla", vip: true },
        { id: 4, nome: "Davi", vip: false },
        { id: 5, nome: "Elis", vip: true },
        { id: 6, nome: "Feli", vip: false }
    ];
    return <div className="flex flex-wrap gap-3 justify-center">{gente.map(p => <Card key={p.id} nome={p.nome} vip={p.vip} />)}</div>;
}
