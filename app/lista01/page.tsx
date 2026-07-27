import TituloTurma from "@/components/lista01/TituloTurma";
import Subtitulo from "@/components/lista01/Subtitulo";
import FuncaoTitulo from "@/components/lista01/FuncaoTitulo";
import Rodape from "@/components/lista01/Rodape";
import UsarOsDois from "@/components/lista01/UsarOsDois";
import CardAluno from "@/components/lista01/CardAluno";
import UsarCardAluno from "@/components/lista01/UsarCardAluno";
import ChavesComConta from "@/components/lista01/ChavesComConta";
import ChavesComVariavel from "@/components/lista01/ChavesComVariavel";
import TemplateString from "@/components/lista01/TemplateString";
import ClassName from "@/components/lista01/ClassName";
import AutoFechada from "@/components/lista01/AutoFechada";
import Fragmento from "@/components/lista01/Fragmento";
import CriarRota from "@/components/lista01/CriarRota";
import Header from "@/components/lista01/Header";
import Contador from "@/components/lista01/Contador";
import SecaoDaTurma from "@/components/lista01/SecaoDaTurma";
import AninharComponentes from "@/components/lista01/AninharComponentes";
import ComentarioJSX from "@/components/lista01/ComentarioJSX";
import MuralDaTurma from "@/components/lista01/MuralDaTurma";

export default function Lista01() {
    return (
    <main className="p-6">
        <h1 className="text-3xl font-bold mb-6">Lista 01</h1>
            <TituloTurma />
            <Subtitulo />
            <FuncaoTitulo />
            <Rodape />
            <UsarOsDois />
            <CardAluno />
            <UsarCardAluno />
            <ChavesComConta />
            <ChavesComVariavel />
            <TemplateString />
            <ClassName />
            <AutoFechada />
            <Fragmento />
            <CriarRota />
            <Header />
            <Contador />
            <SecaoDaTurma />
            <AninharComponentes />
            <ComentarioJSX />
            <MuralDaTurma />
    </main>
    );
}