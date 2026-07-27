// Lista 02 Exercício 02
// Enunciado: Prop num parágrafo
// O componente Perfil recebe a prop cargo e a mostra dentro de um <p>.

type PropParagrafoProps = {
    cargo: string;
};

export default function PropParagrafo({ cargo }: PropParagrafoProps) {
    return <p className="text-xl text-slate-700">Cargo: {cargo}</p>;
}
