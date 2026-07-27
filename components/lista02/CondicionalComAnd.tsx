// Lista 02 Exercício 13
// Enunciado: Condicional com &&
// Mostre um selo ⭐ VIP somente quando a prop vip for verdadeira, usando vip &&.

type CondicionalComAndProps = {
    nome: string;
    vip: boolean;
};

export default function CondicionalComAnd({ nome, vip }: CondicionalComAndProps) {
    return (
        <div className="bg-white rounded-2xl p-6 shadow-lg text-center">
            <h3 className="text-xl font-bold text-slate-800">{nome}</h3>
            {vip && <span className="text-amber-500 font-bold">⭐ VIP</span>}
        </div>
    );
}
