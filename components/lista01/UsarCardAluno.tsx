// Lista 01 Exercício 07
// Enunciado: Usar CardAluno 3×
// Coloque três <CardAluno/> lado a lado. Repare: saem 3 cards iguais ("Ana Carolina") — na próxima aula, props deixam cada um diferente.

import CardAluno from "./CardAluno";

export default function UsarCardAluno() {
    return (
        <div className="flex gap-3">
            <CardAluno />
            <CardAluno />
            <CardAluno />
        </div>
    );
}
