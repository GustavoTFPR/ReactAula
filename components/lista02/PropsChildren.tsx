// Lista 02 Exercício 07
// Enunciado: props.children
// O componente Caixa embrulha o que estiver entre suas tags de abertura e fechamento.

function Caixa({ children }) {
    return <div className="bg-white rounded-xl p-6 shadow-md">{children}</div>;
}