// Lista 05 Exercício 08
// Enunciado: Checar res.ok
// O fetch não falha sozinho em 404. Cheque !res.ok e trate como erro. Aqui buscamos um id inexistente para ver a mensagem.

"use client";
import { useState } from "react";

export default function ChecarRes() {
    const [erro, setErro] = useState<string | null>(null);

    const buscar = async () => {
        try {
            const resposta = await fetch("https://jsonplaceholder.typicode.com/users/9999"); // ID inexistente
            if (!resposta.ok) {
                throw new Error(`Erro na requisição: ${resposta.status} ${resposta.statusText}`);
            }
            const dados = await resposta.json();
            console.log(dados);
            setErro(null); // Limpa o erro se a requisição for bem-sucedida
        }
        catch (error) {
            setErro((error as Error).message); // Armazena a mensagem de erro no estado
        }
    };

    return (
        <div>
            <h1>Checar res.ok</h1>
            <button onClick={buscar}>Buscar Usuário Inexistente</button>
            {erro && <p style={{ color: "red" }}>{erro}</p>} {/* Mostra a mensagem de erro em vermelho */}
        </div>
    );
}