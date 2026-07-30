import Link from "next/link";
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
        <main className="min-h-screen bg-slate-50">
            <div className="max-w-3xl mx-auto px-6 py-12">
                <div className="mb-10">
                    <Link
                        href="/"
                        className="inline-flex items-center gap-1.5 text-sm font-medium text-slate-600 bg-white border border-slate-200 rounded-full px-4 py-2 shadow-sm hover:bg-slate-800 hover:text-white hover:border-slate-800 transition-colors">
                        <span aria-hidden>←</span>Voltar
                    </Link>
                    <h1 className="text-3xl font-bold text-slate-800 mt-2">Lista 01</h1>
                    <p className="text-slate-500 mt-1">JSX e Componentes</p>
                </div>

                <div className="space-y-6">
                    <section className="bg-white rounded-2xl border border-slate-200 p-6">
                        <div className="flex items-center gap-2 mb-4">
                            <span className="text-xs font-bold bg-slate-800 text-white rounded-full w-6 h-6 flex items-center justify-center shrink-0">01</span>
                            <span className="text-sm text-slate-400">Título da turma</span>
                        </div>
                        <TituloTurma />
                    </section>

                    <section className="bg-white rounded-2xl border border-slate-200 p-6">
                        <div className="flex items-center gap-2 mb-4">
                            <span className="text-xs font-bold bg-slate-800 text-white rounded-full w-6 h-6 flex items-center justify-center shrink-0">02</span>
                            <span className="text-sm text-slate-400">Trocar o texto</span>
                        </div>
                        <Subtitulo />
                    </section>

                    <section className="bg-white rounded-2xl border border-slate-200 p-6">
                        <div className="flex items-center gap-2 mb-4">
                            <span className="text-xs font-bold bg-slate-800 text-white rounded-full w-6 h-6 flex items-center justify-center shrink-0">03</span>
                            <span className="text-sm text-slate-400">Componente Titulo</span>
                        </div>
                        <FuncaoTitulo />
                    </section>

                    <section className="bg-white rounded-2xl border border-slate-200 p-6">
                        <div className="flex items-center gap-2 mb-4">
                            <span className="text-xs font-bold bg-slate-800 text-white rounded-full w-6 h-6 flex items-center justify-center shrink-0">04</span>
                            <span className="text-sm text-slate-400">Componente Rodape</span>
                        </div>
                        <Rodape />
                    </section>

                    <section className="bg-white rounded-2xl border border-slate-200 p-6">
                        <div className="flex items-center gap-2 mb-4">
                            <span className="text-xs font-bold bg-slate-800 text-white rounded-full w-6 h-6 flex items-center justify-center shrink-0">05</span>
                            <span className="text-sm text-slate-400">Usar os dois</span>
                        </div>
                        <UsarOsDois />
                    </section>

                    <section className="bg-white rounded-2xl border border-slate-200 p-6">
                        <div className="flex items-center gap-2 mb-4">
                            <span className="text-xs font-bold bg-slate-800 text-white rounded-full w-6 h-6 flex items-center justify-center shrink-0">06</span>
                            <span className="text-sm text-slate-400">CardAluno fixo</span>
                        </div>
                        <CardAluno />
                    </section>

                    <section className="bg-white rounded-2xl border border-slate-200 p-6">
                        <div className="flex items-center gap-2 mb-4">
                            <span className="text-xs font-bold bg-slate-800 text-white rounded-full w-6 h-6 flex items-center justify-center shrink-0">07</span>
                            <span className="text-sm text-slate-400">Usar CardAluno 3×</span>
                        </div>
                        <UsarCardAluno />
                    </section>

                    <section className="bg-white rounded-2xl border border-slate-200 p-6">
                        <div className="flex items-center gap-2 mb-4">
                            <span className="text-xs font-bold bg-slate-800 text-white rounded-full w-6 h-6 flex items-center justify-center shrink-0">08</span>
                            <span className="text-sm text-slate-400">{ } com conta</span>
                        </div>
                        <ChavesComConta />
                    </section>

                    <section className="bg-white rounded-2xl border border-slate-200 p-6">
                        <div className="flex items-center gap-2 mb-4">
                            <span className="text-xs font-bold bg-slate-800 text-white rounded-full w-6 h-6 flex items-center justify-center shrink-0">09</span>
                            <span className="text-sm text-slate-400">{ } com variável</span>
                        </div>
                        <ChavesComVariavel />
                    </section>

                    <section className="bg-white rounded-2xl border border-slate-200 p-6">
                        <div className="flex items-center gap-2 mb-4">
                            <span className="text-xs font-bold bg-slate-800 text-white rounded-full w-6 h-6 flex items-center justify-center shrink-0">10</span>
                            <span className="text-sm text-slate-400">Template string</span>
                        </div>
                        <TemplateString />
                    </section>

                    <section className="bg-white rounded-2xl border border-slate-200 p-6">
                        <div className="flex items-center gap-2 mb-4">
                            <span className="text-xs font-bold bg-slate-800 text-white rounded-full w-6 h-6 flex items-center justify-center shrink-0">11</span>
                            <span className="text-sm text-slate-400">className (Tailwind)</span>
                        </div>
                        <ClassName />
                    </section>

                    <section className="bg-white rounded-2xl border border-slate-200 p-6">
                        <div className="flex items-center gap-2 mb-4">
                            <span className="text-xs font-bold bg-slate-800 text-white rounded-full w-6 h-6 flex items-center justify-center shrink-0">12</span>
                            <span className="text-sm text-slate-400">{"<img/>"} auto-fechada</span>
                        </div>
                        <AutoFechada />
                    </section>

                    <section className="bg-white rounded-2xl border border-slate-200 p-6">
                        <div className="flex items-center gap-2 mb-4">
                            <span className="text-xs font-bold bg-slate-800 text-white rounded-full w-6 h-6 flex items-center justify-center shrink-0">13</span>
                            <span className="text-sm text-slate-400">Fragmento {"<>"}</span>
                        </div>
                        <Fragmento />
                    </section>

                    <section className="bg-white rounded-2xl border border-slate-200 p-6">
                        <div className="flex items-center gap-2 mb-4">
                            <span className="text-xs font-bold bg-slate-800 text-white rounded-full w-6 h-6 flex items-center justify-center shrink-0">14</span>
                            <span className="text-sm text-slate-400">Criar rota /turma</span>
                        </div>
                        <CriarRota />
                    </section>

                    <section className="bg-white rounded-2xl border border-slate-200 p-6">
                        <div className="flex items-center gap-2 mb-4">
                            <span className="text-xs font-bold bg-slate-800 text-white rounded-full w-6 h-6 flex items-center justify-center shrink-0">15</span>
                            <span className="text-sm text-slate-400">Header da turma</span>
                        </div>
                        <Header />
                    </section>

                    <section className="bg-white rounded-2xl border border-slate-200 p-6">
                        <div className="flex items-center gap-2 mb-4">
                            <span className="text-xs font-bold bg-slate-800 text-white rounded-full w-6 h-6 flex items-center justify-center shrink-0">16</span>
                            <span className="text-sm text-slate-400">Contador estático</span>
                        </div>
                        <Contador />
                    </section>

                    <section className="bg-white rounded-2xl border border-slate-200 p-6">
                        <div className="flex items-center gap-2 mb-4">
                            <span className="text-xs font-bold bg-slate-800 text-white rounded-full w-6 h-6 flex items-center justify-center shrink-0">17</span>
                            <span className="text-sm text-slate-400">SecaoTurma</span>
                        </div>
                        <SecaoDaTurma />
                    </section>

                    <section className="bg-white rounded-2xl border border-slate-200 p-6">
                        <div className="flex items-center gap-2 mb-4">
                            <span className="text-xs font-bold bg-slate-800 text-white rounded-full w-6 h-6 flex items-center justify-center shrink-0">18</span>
                            <span className="text-sm text-slate-400">Aninhar componentes</span>
                        </div>
                        <AninharComponentes />
                    </section>

                    <section className="bg-white rounded-2xl border border-slate-200 p-6">
                        <div className="flex items-center gap-2 mb-4">
                            <span className="text-xs font-bold bg-slate-800 text-white rounded-full w-6 h-6 flex items-center justify-center shrink-0">19</span>
                            <span className="text-sm text-slate-400">Comentário em JSX</span>
                        </div>
                        <ComentarioJSX />
                    </section>

                    <section className="bg-white rounded-2xl border border-slate-200 p-6">
                        <div className="flex items-center gap-2 mb-4">
                            <span className="text-xs font-bold bg-slate-800 text-white rounded-full w-6 h-6 flex items-center justify-center shrink-0">20</span>
                            <span className="text-sm text-slate-400">Mural da Turma</span>
                        </div>
                        <MuralDaTurma />
                    </section>
                </div>
            </div>
        </main>
    );
}
