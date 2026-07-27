// Lista 02 Exercício 11
// Enunciado: A key correta
// Todo item de lista precisa de uma key única e estável. Use o id do objeto, nunca o texto que pode repetir.

type CardProps = {
    nome: string;
};

function Card({ nome }: CardProps) {
    return <div className="bg-white rounded-xl p-4 shadow-md text-center">{nome}</div>;
}

export default function KeyCorreta() {
    const pessoas = [{ id: 1, nome: "Ana" }, { id: 2, nome: "Bruno" }, { id: 3, nome: "Carla" }];
    // key única por item
    return <div className="flex gap-3">{pessoas.map(p => <Card key={p.id} nome={p.nome} />)}</div>;
}
