// Lista 02 Exercício 05
// Enunciado: Prop numérica
// O componente Idade recebe anos como número. Passe com chaves: <Idade anos={20}/> (não aspas).

type PropNumericaProps = {
    anos: number;
};

export default function PropNumerica({ anos }: PropNumericaProps) {
    return <p className="text-xl text-slate-700">Tenho {anos} anos</p>;
}
