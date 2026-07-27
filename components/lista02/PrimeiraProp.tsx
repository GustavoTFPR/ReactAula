// Lista 02 Exercício 01
// Enunciado: Primeira prop
// O componente Saudacao recebe uma prop nome e a exibe dentro de um <h1>.

function Saudacao(props) {
    return <h1 className="text-3xl font-bold text-slate-800">Olá, {props.nome}!</h1>;
}


