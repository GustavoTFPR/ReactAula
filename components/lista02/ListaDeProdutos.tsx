// Lista 02 Exercício 16
// Enunciado: Lista de produtos
// Um array de produtos {id, nome, preco} vira uma lista "Nome — R$ preço".

function App() {
    const produtos = [{ id: 1, nome: "Café", preco: 8 }, { id: 2, nome: "Bolo", preco: 12 }];
    return (
        <ul className="text-xl text-slate-700 space-y-2">
            {produtos.map(p =>
                <li key={p.id} className="bg-white rounded-lg px-4 py-2 shadow-sm">{p.nome} — R$ {p.preco}</li>)}
        </ul>
    );
}