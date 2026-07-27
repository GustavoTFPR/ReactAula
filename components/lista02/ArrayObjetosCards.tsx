// Lista 02 Exercício 10
// Enunciado: Array de objetos em cards
// Um array de objetos { id, nome } vira vários < Card /> lado a lado com.map().

function Card({ nome }) {
    return <div className="bg-white rounded-xl p-4 shadow-md text-center">{nome}</div>;
}
function App() {
    const pessoas = [{ id: 1, nome: "Ana" }, { id: 2, nome: "Bruno" }, { id: 3, nome: "Carla" }];
    return <div className="flex gap-3">{pessoas.map(p => <Card key={p.id} nome={p.nome} />)}</div>;
}