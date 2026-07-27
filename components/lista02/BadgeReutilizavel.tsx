// Lista 02 Exercício 17
// Enunciado: Badge reutilizável
// Crie um Badge que recebe texto por prop e use o mesmo componente 3 vezes com textos diferentes.

type BadgeProps = {
    texto: string;
};

function Badge({ texto }: BadgeProps) {
    return <span className="px-3 py-1 rounded-full bg-cyan-100 text-cyan-800 font-bold">{texto}</span>;
}

export default function BadgeReutilizavel() {
    return (
        <div className="flex gap-2">
            <Badge texto="Novo" />
            <Badge texto="Promoção" />
            <Badge texto="Últimas" />
        </div>
    );
}
