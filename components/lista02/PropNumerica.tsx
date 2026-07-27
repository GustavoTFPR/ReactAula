// Lista 02 Exercício 05
// Enunciado: Prop numérica
// O componente Idade recebe anos como número. Passe com chaves: <Idade anos={20}/> (não aspas).

function Idade({ anos }) {
    return <p className="text-xl text-slate-700">Tenho {anos} anos</p>;
}