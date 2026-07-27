// Lista 02 Exercício 07
// Enunciado: props.children
// O componente Caixa embrulha o que estiver entre suas tags de abertura e fechamento.

type PropsChildrenProps = {
    children: React.ReactNode;
};

export default function PropsChildren({ children }: PropsChildrenProps) {
    return <div className="bg-white rounded-xl p-6 shadow-md">{children}</div>;
}
