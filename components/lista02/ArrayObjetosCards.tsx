// Lista 02 Exercício 10
// Enunciado: Array de objetos em cards
// Um array de objetos { id, nome } vira vários <Card /> lado a lado com .map().

type CardProps = {
    nome: string;
};

function Card({ nome }: CardProps) {
    return <div className="bg-white rounded-xl p-4 shadow-md text-center">{nome}</div>;
}

export default function ArrayObjetosCards() {
    const pessoas = [{ id: 1, nome: "Ana" }, { id: 2, nome: "Bruno" }, { id: 3, nome: "Carla" }];
    return <div className="flex gap-3">{pessoas.map(p => <Card key={p.id} nome={p.nome} />)}</div>;
}
