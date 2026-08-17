// Lista 05 - Exercício 07
// Enunciado: Tratar erro
// Envolva a busca num try/catch. Guarde a falha num estado useState<string | null>(null) e mostre a mensagem em vermelho.

"use client";

import { useState } from "react";

export default function TratarErro() {
  const [erro, setErro] = useState<string | null>(null);

    const buscar = async () => {
        try {
            const resposta = await fetch("https://jsonplaceholder.typicode.com/users");
            if (!resposta.ok) {
                throw new Error("Erro na requisição");
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
    
    <div className="mx-auto max-w-sm rounded-xl border border-zinc-200 bg-white p-6 shadow-sm">
      <h1>Tratar Erro</h1>
      <button onClick={buscar}>Buscar Usuários</button>
      {erro && <p style={{ color: "red" }}>{erro}</p>} {/* Mostra a mensagem de erro em vermelho */}
    </div>
  );
}
