import CriarRota from "@/components/lista01/CriarRota";

// Rota criada para o Exercício 14 da Lista 01: app/turma/page.tsx faz
// a URL /turma existir sozinha, sem precisar registrar em lugar nenhum.
export default function TurmaPage() {
    return (
        <main className="max-w-3xl mx-auto px-6 py-10">
            <CriarRota />
        </main>
    );
}
