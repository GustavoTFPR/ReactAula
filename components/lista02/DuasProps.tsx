// Lista 02 Exercício 03
// Enunciado: Duas props
// O componente Card recebe nome e cargo e exibe os dois num cartão.

function Card(props) {
    return (
        <div className="bg-white rounded-2xl p-6 shadow-lg text-center">
            <h3 className="text-xl font-bold text-slate-800">{props.nome}</h3>
            <p className="text-slate-500">{props.cargo}</p>
        </div>
    );
}