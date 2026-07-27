// Lista 02 Exercício 06
// Enunciado: Prop boolean
// O componente Status recebe ativo (boolean) e mostra "ativo" ou "inativo" conforme o valor.

type PropBooleanProps = {
    ativo: boolean;
};

export default function PropBoolean({ ativo }: PropBooleanProps) {
    return <span className="px-3 py-1 rounded-full bg-slate-100 text-slate-700">{ativo ? "🟢 ativo" : "⚪ inativo"}</span>;
}
