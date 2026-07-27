// Lista 02 Exercício 04
// Enunciado: Desestruturar props
// Mesmo cartão do exercício anterior, mas pegue as props direto com { } (desestruturação da Aula 10).

type DesestruturarPropsProps = {
    nome: string;
    cargo: string;
};

export default function DesestruturarProps({ nome, cargo }: DesestruturarPropsProps) {
    return (
        <div className="bg-white rounded-2xl p-6 shadow-lg text-center">
            <h3 className="text-xl font-bold text-slate-800">{nome}</h3>
            <p className="text-slate-500">{cargo}</p>
        </div>
    );
}
