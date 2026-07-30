import Link from "next/link";
import AninharComponentes from "@/components/lista01/AninharComponentes";
import ArrayObjetosCards from "@/components/lista02/ArrayObjetosCards";
import BadgeReutilizavel from "@/components/lista02/BadgeReutilizavel";
import CondicionalComAnd from "@/components/lista02/CondicionalComAnd";
import DesestruturarProps from "@/components/lista02/DesestruturarProps";
import DuasProps from "@/components/lista02/DuasProps";
import FilterMap from "@/components/lista02/FilterMap";
import GradeDeCards from "@/components/lista02/GradeDeCards";
import KeyCorreta from "@/components/lista02/KeyCorreta";
import ListaDeProdutos from "@/components/lista02/ListaDeProdutos";
import ListaGenerica from "@/components/lista02/ListaGenerica";
import ListaMap from "@/components/lista02/ListaMap";
import MapComIndice from "@/components/lista02/MapComIndice";
import PrimeiraProp from "@/components/lista02/PrimeiraProp";
import PropBoolean from "@/components/lista02/PropBoolean";
import PropNumerica from "@/components/lista02/PropNumerica";
import PropParagrafo from "@/components/lista02/PropParagrafo";
import PropsChildren from "@/components/lista02/PropsChildren";
import TabelaViaMap from "@/components/lista02/TabelaViaMap";
import TernarioJSX from "@/components/lista02/TernarioJSX";
import ValorPadrao from "@/components/lista02/ValorPadrao";

export default function Lista02() {
    return (
        <main className="min-h-screen bg-slate-50">
            <div className="max-w-3xl mx-auto px-6 py-12">
                <div className="mb-10">
                    <Link href="/" className="text-sm text-slate-500 hover:text-slate-700 transition-colors">
                        ← Voltar
                    </Link>
                    <h1 className="text-3xl font-bold text-slate-800 mt-2">Lista 02</h1>
                    <p className="text-slate-500 mt-1">Props e Listas</p>
                </div>

                <div className="space-y-6">
            <section className="bg-white rounded-2xl border border-cyan-100 p-6">
                <div className="flex items-center gap-2 mb-4">
                    <span className="text-xs font-bold bg-cyan-800 text-white rounded-full w-6 h-6 flex items-center justify-center shrink-0">01</span>
                    <span className="text-sm text-slate-400">Aninhar componentes</span>
                </div>
                <AninharComponentes/>
            </section>

            <section className="bg-white rounded-2xl border border-cyan-100 p-6">
                <div className="flex items-center gap-2 mb-4">
                    <span className="text-xs font-bold bg-cyan-800 text-white rounded-full w-6 h-6 flex items-center justify-center shrink-0">02</span>
                    <span className="text-sm text-slate-400">Array de objetos em cards</span>
                </div>
                <ArrayObjetosCards/>
            </section>

            <section className="bg-white rounded-2xl border border-cyan-100 p-6">
                <div className="flex items-center gap-2 mb-4">
                    <span className="text-xs font-bold bg-cyan-800 text-white rounded-full w-6 h-6 flex items-center justify-center shrink-0">03</span>
                    <span className="text-sm text-slate-400">Badge reutilizável</span>
                </div>
                <BadgeReutilizavel/>
            </section>

            <section className="bg-white rounded-2xl border border-cyan-100 p-6">
                <div className="flex items-center gap-2 mb-4">
                    <span className="text-xs font-bold bg-cyan-800 text-white rounded-full w-6 h-6 flex items-center justify-center shrink-0">04</span>
                    <span className="text-sm text-slate-400">Condicional com &&</span>
                </div>
                <CondicionalComAnd nome="Gustavo" vip={true} />
            </section>

            <section className="bg-white rounded-2xl border border-cyan-100 p-6">
                <div className="flex items-center gap-2 mb-4">
                    <span className="text-xs font-bold bg-cyan-800 text-white rounded-full w-6 h-6 flex items-center justify-center shrink-0">05</span>
                    <span className="text-sm text-slate-400">Desestruturar props</span>
                </div>
                <DesestruturarProps nome="Gustavo" cargo="Desenvolvedor de Sistemas" />
            </section>

            <section className="bg-white rounded-2xl border border-cyan-100 p-6">
                <div className="flex items-center gap-2 mb-4">
                    <span className="text-xs font-bold bg-cyan-800 text-white rounded-full w-6 h-6 flex items-center justify-center shrink-0">06</span>
                    <span className="text-sm text-slate-400">Duas props</span>
                </div>
                <DuasProps nome="Gustavo" cargo="Desenvolvedor de Sistemas" />
            </section>

            <section className="bg-white rounded-2xl border border-cyan-100 p-6">
                <div className="flex items-center gap-2 mb-4">
                    <span className="text-xs font-bold bg-cyan-800 text-white rounded-full w-6 h-6 flex items-center justify-center shrink-0">07</span>
                    <span className="text-sm text-slate-400">filter + map</span>
                </div>
                <FilterMap/>
            </section>

            <section className="bg-white rounded-2xl border border-cyan-100 p-6">
                <div className="flex items-center gap-2 mb-4">
                    <span className="text-xs font-bold bg-cyan-800 text-white rounded-full w-6 h-6 flex items-center justify-center shrink-0">08</span>
                    <span className="text-sm text-slate-400">Grade de cards</span>
                </div>
                <GradeDeCards/>
            </section>

            <section className="bg-white rounded-2xl border border-cyan-100 p-6">
                <div className="flex items-center gap-2 mb-4">
                    <span className="text-xs font-bold bg-cyan-800 text-white rounded-full w-6 h-6 flex items-center justify-center shrink-0">09</span>
                    <span className="text-sm text-slate-400">A key correta</span>
                </div>
                <KeyCorreta/>
            </section>

            <section className="bg-white rounded-2xl border border-cyan-100 p-6">
                <div className="flex items-center gap-2 mb-4">
                    <span className="text-xs font-bold bg-cyan-800 text-white rounded-full w-6 h-6 flex items-center justify-center shrink-0">10</span>
                    <span className="text-sm text-slate-400">Lista de produtos</span>
                </div>
                <ListaDeProdutos/>
            </section>

            <section className="bg-white rounded-2xl border border-cyan-100 p-6">
                <div className="flex items-center gap-2 mb-4">
                    <span className="text-xs font-bold bg-cyan-800 text-white rounded-full w-6 h-6 flex items-center justify-center shrink-0">11</span>
                    <span className="text-sm text-slate-400">Lista genérica</span>
                </div>
                <ListaGenerica itens={["Item 1", "Item 2", "Item 3"]} />
            </section>

            <section className="bg-white rounded-2xl border border-cyan-100 p-6">
                <div className="flex items-center gap-2 mb-4">
                    <span className="text-xs font-bold bg-cyan-800 text-white rounded-full w-6 h-6 flex items-center justify-center shrink-0">12</span>
                    <span className="text-sm text-slate-400">Lista com .map</span>
                </div>
                <ListaMap/>
            </section>

            <section className="bg-white rounded-2xl border border-cyan-100 p-6">
                <div className="flex items-center gap-2 mb-4">
                    <span className="text-xs font-bold bg-cyan-800 text-white rounded-full w-6 h-6 flex items-center justify-center shrink-0">13</span>
                    <span className="text-sm text-slate-400">.map com índice</span>
                </div>
                <MapComIndice/>
            </section>

            <section className="bg-white rounded-2xl border border-cyan-100 p-6">
                <div className="flex items-center gap-2 mb-4">
                    <span className="text-xs font-bold bg-cyan-800 text-white rounded-full w-6 h-6 flex items-center justify-center shrink-0">14</span>
                    <span className="text-sm text-slate-400">Primeira prop</span>
                </div>
                <PrimeiraProp nome="Gustavo" />
            </section>

            <section className="bg-white rounded-2xl border border-cyan-100 p-6">
                <div className="flex items-center gap-2 mb-4">
                    <span className="text-xs font-bold bg-cyan-800 text-white rounded-full w-6 h-6 flex items-center justify-center shrink-0">15</span>
                    <span className="text-sm text-slate-400">Prop boolean</span>
                </div>
                <PropBoolean ativo={true} />
            </section>

            <section className="bg-white rounded-2xl border border-cyan-100 p-6">
                <div className="flex items-center gap-2 mb-4">
                    <span className="text-xs font-bold bg-cyan-800 text-white rounded-full w-6 h-6 flex items-center justify-center shrink-0">16</span>
                    <span className="text-sm text-slate-400">Prop numérica</span>
                </div>
                <PropNumerica anos={30} />
            </section>

            <section className="bg-white rounded-2xl border border-cyan-100 p-6">
                <div className="flex items-center gap-2 mb-4">
                    <span className="text-xs font-bold bg-cyan-800 text-white rounded-full w-6 h-6 flex items-center justify-center shrink-0">17</span>
                    <span className="text-sm text-slate-400">Prop num parágrafo</span>
                </div>
                <PropParagrafo cargo="Desenvolvedor de Sistemas" />
            </section>

            <section className="bg-white rounded-2xl border border-cyan-100 p-6">
                <div className="flex items-center gap-2 mb-4">
                    <span className="text-xs font-bold bg-cyan-800 text-white rounded-full w-6 h-6 flex items-center justify-center shrink-0">18</span>
                    <span className="text-sm text-slate-400">props.children</span>
                </div>
                <PropsChildren>
                    <p>Este é um conteúdo passado como children.</p>
                </PropsChildren>
            </section>

            <section className="bg-white rounded-2xl border border-cyan-100 p-6">
                <div className="flex items-center gap-2 mb-4">
                    <span className="text-xs font-bold bg-cyan-800 text-white rounded-full w-6 h-6 flex items-center justify-center shrink-0">19</span>
                    <span className="text-sm text-slate-400">Tabela via .map</span>
                </div>
                <TabelaViaMap/>
            </section>

            <section className="bg-white rounded-2xl border border-cyan-100 p-6">
                <div className="flex items-center gap-2 mb-4">
                    <span className="text-xs font-bold bg-cyan-800 text-white rounded-full w-6 h-6 flex items-center justify-center shrink-0">20</span>
                    <span className="text-sm text-slate-400">Ternário no JSX</span>
                </div>
                <TernarioJSX online={true} />
            </section>

            <section className="bg-white rounded-2xl border border-cyan-100 p-6">
                <div className="flex items-center gap-2 mb-4">
                    <span className="text-xs font-bold bg-cyan-800 text-white rounded-full w-6 h-6 flex items-center justify-center shrink-0">21</span>
                    <span className="text-sm text-slate-400">Valor padrão</span>
                </div>
                <ValorPadrao/>
            </section>
                </div>
            </div>
        </main>
    );
}
