// Lista 02 Exercício 08
// Enunciado: Valor padrão
// O componente Ola usa "visitante" quando a prop nome não é passada.

function Ola({ nome = "visitante" }) {
    return <h2 className="text-2xl font-bold text-slate-800">Olá, {nome}!</h2>;
}