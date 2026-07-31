import Link from "next/link";
import AlertOnClique from "@/components/lista03/AlertOnClick";
import ContadorMaisUm from "@/components/lista03/Contador+1";
import ContarCaracteres from "@/components/lista03/ContarCaracteres";
import InputControlado from "@/components/lista03/InputControlado";
import MenosUmEZerar from "@/components/lista03/MenosUmEZerar";
import MostrarEsconder from "@/components/lista03/MostrarEsconder";
import ParOuImpar from "@/components/lista03/ParOuImpar";
import ResetarInput from "@/components/lista03/ResetarInput";
import ToggleLigaDesliga from "@/components/lista03/ToggleLigaDesliga";
import TrocaCor from "@/components/lista03/TrocaCor";
import MarcarPresenca from "@/components/lista03/MarcarPresenca";
import CurtidasCard from "@/components/lista03/CurtidasCard";
import AdicionarLista from "@/components/lista03/AdicionarLista";
import RemoverAluno from "@/components/lista03/RemoverAluno";
import ContarPresentes from "@/components/lista03/ContarPresentes";
import DoisContadores from "@/components/lista03/DoisContadores";
import SoPresentes from "@/components/lista03/SoPresentes";
import PresencaInterativa from "@/components/lista03/PresencaInterativa";
import MiniMatricula from "@/components/lista03/MiniMatricula";
import PainelTurma from "@/components/lista03/PainelTurma";

export default function Lista03() {
    return (
        <main className="min-h-screen bg-slate-50">
            <div className="max-w-3xl mx-auto px-6 py-12">
                <div className="mb-10">
                    <Link
                        href="/"
                        className="inline-flex items-center gap-1.5 text-sm font-medium text-slate-600 bg-white border border-slate-200 rounded-full px-4 py-2 shadow-sm hover:bg-slate-800 hover:text-white hover:border-slate-800 transition-colors">
                        <span aria-hidden>←</span>Voltar
                    </Link>
                    <h1 className="text-3xl font-bold text-slate-800 mt-2">Lista 03</h1>
                    <p className="text-slate-500 mt-1">Estado & Eventos</p>
                </div>

                <div className="space-y-6">
                    <section className="bg-white rounded-2xl border border-cyan-100 p-6">
                        <div className="flex items-center gap-2 mb-4">
                            <span className="text-xs font-bold bg-slate-800 text-white rounded-full w-6 h-6 flex items-center justify-center shrink-0">01</span>
                            <span className="text-sm text-slate-400">AlertOnClique</span>
                        </div>
                        <AlertOnClique />
                    </section>

                    <section className="bg-white rounded-2xl border border-cyan-100 p-6">
                        <div className="flex items-center gap-2 mb-4">
                            <span className="text-xs font-bold bg-slate-800 text-white rounded-full w-6 h-6 flex items-center justify-center shrink-0">02</span>
                            <span className="text-sm text-slate-400">ContadorMaisUm</span>
                        </div>
                        <ContadorMaisUm />
                    </section>

                    <section className="bg-white rounded-2xl border border-cyan-100 p-6">
                        <div className="flex items-center gap-2 mb-4">
                            <span className="text-xs font-bold bg-slate-800 text-white rounded-full w-6 h-6 flex items-center justify-center shrink-0">03</span>
                            <span className="text-sm text-slate-400">MenosUmZerar</span>
                        </div>
                        <MenosUmEZerar />
                    </section>

                    <section className="bg-white rounded-2xl border border-cyan-100 p-6">
                        <div className="flex items-center gap-2 mb-4">
                            <span className="text-xs font-bold bg-slate-800 text-white rounded-full w-6 h-6 flex items-center justify-center shrink-0">04</span>
                            <span className="text-sm text-slate-400">ParOuImpar</span>
                        </div>
                        <ParOuImpar />
                    </section>

                    <section className="bg-white rounded-2xl border border-cyan-100 p-6">
                        <div className="flex items-center gap-2 mb-4">
                            <span className="text-xs font-bold bg-slate-800 text-white rounded-full w-6 h-6 flex items-center justify-center shrink-0">05</span>
                            <span className="text-sm text-slate-400">ToggleLigaDesliga</span>
                        </div>
                        <ToggleLigaDesliga />
                    </section>

                    <section className="bg-white rounded-2xl border border-cyan-100 p-6">
                        <div className="flex items-center gap-2 mb-4">
                            <span className="text-xs font-bold bg-slate-800 text-white rounded-full w-6 h-6 flex items-center justify-center shrink-0">06</span>
                            <span className="text-sm text-slate-400">MostrarEsconder</span>
                        </div>
                        <MostrarEsconder />
                    </section>

                    <section className="bg-white rounded-2xl border border-cyan-100 p-6">
                        <div className="flex items-center gap-2 mb-4">
                            <span className="text-xs font-bold bg-slate-800 text-white rounded-full w-6 h-6 flex items-center justify-center shrink-0">07</span>
                            <span className="text-sm text-slate-400">TrocarCor</span>
                        </div>
                        <TrocaCor />
                    </section>

                    <section className="bg-white rounded-2xl border border-cyan-100 p-6">
                        <div className="flex items-center gap-2 mb-4">
                            <span className="text-xs font-bold bg-slate-800 text-white rounded-full w-6 h-6 flex items-center justify-center shrink-0">08</span>
                            <span className="text-sm text-slate-400">InputControlado</span>
                        </div>
                        <InputControlado />
                    </section>

                    <section className="bg-white rounded-2xl border border-cyan-100 p-6">
                        <div className="flex items-center gap-2 mb-4">
                            <span className="text-xs font-bold bg-slate-800 text-white rounded-full w-6 h-6 flex items-center justify-center shrink-0">09</span>
                            <span className="text-sm text-slate-400">ContarCaracteres</span>
                        </div>
                        <ContarCaracteres />
                    </section>

                    <section className="bg-white rounded-2xl border border-cyan-100 p-6">
                        <div className="flex items-center gap-2 mb-4">
                            <span className="text-xs font-bold bg-slate-800 text-white rounded-full w-6 h-6 flex items-center justify-center shrink-0">10</span>
                            <span className="text-sm text-slate-400">ResetarInput</span>
                        </div>
                        <ResetarInput />
                    </section>

                    <section className="bg-white rounded-2xl border border-cyan-100 p-6">
                        <div className="flex items-center gap-2 mb-4">
                            <span className="text-xs font-bold bg-slate-800 text-white rounded-full w-6 h-6 flex items-center justify-center shrink-0">11</span>
                            <span className="text-sm text-slate-400">MarcarPresença</span>
                        </div>
                        <MarcarPresenca />
                    </section>

                    <section className="bg-white rounded-2xl border border-cyan-100 p-6">
                        <div className="flex items-center gap-2 mb-4">
                            <span className="text-xs font-bold bg-slate-800 text-white rounded-full w-6 h-6 flex items-center justify-center shrink-0">12</span>
                            <span className="text-sm text-slate-400">CurtidasCard</span>
                        </div>
                        <CurtidasCard />
                    </section>

                    <section className="bg-white rounded-2xl border border-cyan-100 p-6">
                        <div className="flex items-center gap-2 mb-4">
                            <span className="text-xs font-bold bg-slate-800 text-white rounded-full w-6 h-6 flex items-center justify-center shrink-0">13</span>
                            <span className="text-sm text-slate-400">AdicionarLista</span>
                        </div>
                        <AdicionarLista />
                    </section>

                    <section className="bg-white rounded-2xl border border-cyan-100 p-6">
                        <div className="flex items-center gap-2 mb-4">
                            <span className="text-xs font-bold bg-slate-800 text-white rounded-full w-6 h-6 flex items-center justify-center shrink-0">14</span>
                            <span className="text-sm text-slate-400">RemoverAluno</span>
                        </div>
                        <RemoverAluno />
                    </section>

                    <section className="bg-white rounded-2xl border border-cyan-100 p-6">
                        <div className="flex items-center gap-2 mb-4">
                            <span className="text-xs font-bold bg-slate-800 text-white rounded-full w-6 h-6 flex items-center justify-center shrink-0">15</span>
                            <span className="text-sm text-slate-400">ContarPresentes</span>
                        </div>
                        <ContarPresentes />
                    </section>

                    <section className="bg-white rounded-2xl border border-cyan-100 p-6">
                        <div className="flex items-center gap-2 mb-4">
                            <span className="text-xs font-bold bg-slate-800 text-white rounded-full w-6 h-6 flex items-center justify-center shrink-0">16</span>
                            <span className="text-sm text-slate-400">DoisContadores</span>
                        </div>
                        <DoisContadores />
                    </section>

                    <section className="bg-white rounded-2xl border border-cyan-100 p-6">
                        <div className="flex items-center gap-2 mb-4">
                            <span className="text-xs font-bold bg-slate-800 text-white rounded-full w-6 h-6 flex items-center justify-center shrink-0">17</span>
                            <span className="text-sm text-slate-400">SoPresentes</span>
                        </div>
                        <SoPresentes />
                    </section>

                    <section className="bg-white rounded-2xl border border-cyan-100 p-6">
                        <div className="flex items-center gap-2 mb-4">
                            <span className="text-xs font-bold bg-slate-800 text-white rounded-full w-6 h-6 flex items-center justify-center shrink-0">18</span>
                            <span className="text-sm text-slate-400">PresençaInterativa</span>
                        </div>
                        <PresencaInterativa />
                    </section>

                    <section className="bg-white rounded-2xl border border-cyan-100 p-6">
                        <div className="flex items-center gap-2 mb-4">
                            <span className="text-xs font-bold bg-slate-800 text-white rounded-full w-6 h-6 flex items-center justify-center shrink-0">19</span>
                            <span className="text-sm text-slate-400">MiniMatricula</span>
                        </div>
                        <MiniMatricula />
                    </section>

                    <section className="bg-white rounded-2xl border border-cyan-100 p-6">
                        <div className="flex items-center gap-2 mb-4">
                            <span className="text-xs font-bold bg-slate-800 text-white rounded-full w-6 h-6 flex items-center justify-center shrink-0">20</span>
                            <span className="text-sm text-slate-400">PainelTurma</span>
                        </div>
                        <PainelTurma />
                    </section>
                </div>
            </div>
        </main>
    );
}
