// Lista 02 Exercício 20
// Enunciado: Tabela via .map
// Um array de alunos {id, nome, nota} vira uma <table>, uma <tr> por aluno.

export default function TabelaViaMap() {
    const alunos = [{ id: 1, nome: "Ana", nota: 9 }, { id: 2, nome: "Bruno", nota: 7 }, { id: 3, nome: "Carla", nota: 10 }];
    return (
        <table className="w-full bg-white rounded-lg overflow-hidden text-slate-800">
            <thead><tr><th className="border px-3 py-1">Nome</th><th className="border px-3 py-1">Nota</th></tr></thead>
            <tbody>
                {alunos.map(a =>
                    <tr key={a.id}><td className="border px-3 py-1">{a.nome}</td><td className="border px-3 py-1">{a.nota}</td></tr>)}
            </tbody>
        </table>
    );
}
