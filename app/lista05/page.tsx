import Link from "next/link";
import PrimeiroFetch from "@/components/lista05/PrimeiroFetch";
import AsyncAwait from "@/components/lista05/AsyncAwait";
import EstadoDeLoading from "@/components/lista05/EstadoDeLoading";
import TiparResposta from "@/components/lista05/TiparResposta";
import QuantosVieram from "@/components/lista05/QuantosVieram";
import CardsDaTurma from "@/components/lista05/CardsDaTurma";
import TratarErro from "@/components/lista05/TratarErro";
import ChecarRes from "@/components/lista05/ChecarRes";
import FiltrarPorUso from "@/components/lista05/FiltrarPorUso";
import SoPresentes from "@/components/lista05/SoPresentes";
import ContadorDePresentes from "@/components/lista05/ContadorDePresentes";
import BuscarUmAluno from "@/components/lista05/BuscarUmAluno";


export default function Lista05() {
    return (
        <main className="min-h-screen bg-slate-50">
            <div className="max-w-3xl mx-auto px-6 py-12">
                <div className="mb-10">
                    <Link
                        href="/"
                        className="inline-flex items-center gap-1.5 text-sm font-medium text-slate-600 bg-white border border-slate-200 rounded-full px-4 py-2 shadow-sm hover:bg-slate-800 hover:text-white hover:border-slate-800 transition-colors">
                        <span aria-hidden>←</span>Voltar
                    </Link>
                    <h1 className="text-3xl font-bold text-slate-800 mt-2">Lista 05</h1>
                    <p className="text-slate-500 mt-1">Consumir a API</p>
                </div>

                <div className="space-y-6">
                    <section className="bg-white rounded-2xl border border-purple-100 p-6">
                        <div className="flex items-center gap-2 mb-4">
                            <span className="text-xs font-bold bg-slate-800 text-white rounded-full w-6 h-6 flex items-center justify-center shrink-0">01</span>
                            <span className="text-sm text-slate-400">PrimeiroFetch</span>
                        </div>
                        <PrimeiroFetch />
                    </section>
                </div>

                <div className="space-y-6">
                    <section className="bg-white rounded-2xl border border-purple-100 p-6">
                        <div className="flex items-center gap-2 mb-4">
                            <span className="text-xs font-bold bg-slate-800 text-white rounded-full w-6 h-6 flex items-center justify-center shrink-0">02</span>
                            <span className="text-sm text-slate-400">AsyncAwait</span>
                        </div>
                        <AsyncAwait/>
                    </section>
                </div>

                <div className="space-y-6">
                    <section className="bg-white rounded-2xl border border-purple-100 p-6">
                        <div className="flex items-center gap-2 mb-4">
                            <span className="text-xs font-bold bg-slate-800 text-white rounded-full w-6 h-6 flex items-center justify-center shrink-0">03</span>
                            <span className="text-sm text-slate-400">EstadoDeLoading</span>
                        </div>
                        <EstadoDeLoading />
                    </section>
                </div>

                <div className="space-y-6">
                    <section className="bg-white rounded-2xl border border-purple-100 p-6">
                        <div className="flex items-center gap-2 mb-4">
                            <span className="text-xs font-bold bg-slate-800 text-white rounded-full w-6 h-6 flex items-center justify-center shrink-0">04</span>
                            <span className="text-sm text-slate-400">TiparResposta</span>
                        </div>
                        <TiparResposta />
                    </section>
                </div>

                <div className="space-y-6">
                    <section className="bg-white rounded-2xl border border-purple-100 p-6">
                        <div className="flex items-center gap-2 mb-4">
                            <span className="text-xs font-bold bg-slate-800 text-white rounded-full w-6 h-6 flex items-center justify-center shrink-0">05</span>
                            <span className="text-sm text-slate-400">QuantosVieram</span>
                        </div>
                        <QuantosVieram />
                    </section>
                </div>

                <div className="space-y-6">
                    <section className="bg-white rounded-2xl border border-purple-100 p-6">
                        <div className="flex items-center gap-2 mb-4">
                            <span className="text-xs font-bold bg-slate-800 text-white rounded-full w-6 h-6 flex items-center justify-center shrink-0">06</span>
                            <span className="text-sm text-slate-400">CardsDaTurma</span>
                        </div>
                        <CardsDaTurma />
                    </section>
                </div>

                <div className="space-y-6">
                    <section className="bg-white rounded-2xl border border-purple-100 p-6">
                        <div className="flex items-center gap-2 mb-4">
                            <span className="text-xs font-bold bg-slate-800 text-white rounded-full w-6 h-6 flex items-center justify-center shrink-0">07</span>
                            <span className="text-sm text-slate-400">TratarErro</span>
                        </div>
                        <TratarErro />
                    </section>
                </div>

                <div className="space-y-6">
                    <section className="bg-white rounded-2xl border border-purple-100 p-6">
                        <div className="flex items-center gap-2 mb-4">
                            <span className="text-xs font-bold bg-slate-800 text-white rounded-full w-6 h-6 flex items-center justify-center shrink-0">08</span>
                            <span className="text-sm text-slate-400">ChecarRes</span>
                        </div>
                        <ChecarRes />
                    </section>
                </div>

                <div className="space-y-6">
                    <section className="bg-white rounded-2xl border border-purple-100 p-6">
                        <div className="flex items-center gap-2 mb-4">
                            <span className="text-xs font-bold bg-slate-800 text-white rounded-full w-6 h-6 flex items-center justify-center shrink-0">09</span>
                            <span className="text-sm text-slate-400">FiltrarPorUso</span>
                        </div>
                        <FiltrarPorUso />
                    </section>
                </div>

                <div className="space-y-6">
                    <section className="bg-white rounded-2xl border border-purple-100 p-6">
                        <div className="flex items-center gap-2 mb-4">
                            <span className="text-xs font-bold bg-slate-800 text-white rounded-full w-6 h-6 flex items-center justify-center shrink-0">10</span>
                            <span className="text-sm text-slate-400">SoPresentes</span>
                        </div>
                        <SoPresentes />
                    </section>
                </div>

                <div className="space-y-6">
                    <section className="bg-white rounded-2xl border border-purple-100 p-6">
                        <div className="flex items-center gap-2 mb-4">
                            <span className="text-xs font-bold bg-slate-800 text-white rounded-full w-6 h-6 flex items-center justify-center shrink-0">11</span>
                            <span className="text-sm text-slate-400">ContadorDePresentes</span>
                        </div>
                        <ContadorDePresentes />
                    </section>
                </div>

                <div className="space-y-6">
                    <section className="bg-white rounded-2xl border border-purple-100 p-6">
                        <div className="flex items-center gap-2 mb-4">
                            <span className="text-xs font-bold bg-slate-800 text-white rounded-full w-6 h-6 flex items-center justify-center shrink-0">12</span>
                            <span className="text-sm text-slate-400">BuscarUmAluno</span>
                        </div>
                        <BuscarUmAluno />
                    </section>
                </div>

                <div className="space-y-6">
                    <section className="bg-white rounded-2xl border border-purple-100 p-6">
                        <div className="flex items-center gap-2 mb-4">
                            <span className="text-xs font-bold bg-slate-800 text-white rounded-full w-6 h-6 flex items-center justify-center shrink-0">13</span>
                            <span className="text-sm text-slate-400">QuantosVieram</span>
                        </div>
                        <QuantosVieram />
                    </section>
                </div>

                <div className="space-y-6">
                    <section className="bg-white rounded-2xl border border-purple-100 p-6">
                        <div className="flex items-center gap-2 mb-4">
                            <span className="text-xs font-bold bg-slate-800 text-white rounded-full w-6 h-6 flex items-center justify-center shrink-0">14</span>
                            <span className="text-sm text-slate-400">QuantosVieram</span>
                        </div>
                        <QuantosVieram />
                    </section>
                </div>

                <div className="space-y-6">
                    <section className="bg-white rounded-2xl border border-purple-100 p-6">
                        <div className="flex items-center gap-2 mb-4">
                            <span className="text-xs font-bold bg-slate-800 text-white rounded-full w-6 h-6 flex items-center justify-center shrink-0">15</span>
                            <span className="text-sm text-slate-400">QuantosVieram</span>
                        </div>
                        <QuantosVieram />
                    </section>
                </div>

                <div className="space-y-6">
                    <section className="bg-white rounded-2xl border border-purple-100 p-6">
                        <div className="flex items-center gap-2 mb-4">
                            <span className="text-xs font-bold bg-slate-800 text-white rounded-full w-6 h-6 flex items-center justify-center shrink-0">16</span>
                            <span className="text-sm text-slate-400">QuantosVieram</span>
                        </div>
                        <QuantosVieram />
                    </section>
                </div>


                <div className="space-y-6">
                    <section className="bg-white rounded-2xl border border-purple-100 p-6">
                        <div className="flex items-center gap-2 mb-4">
                            <span className="text-xs font-bold bg-slate-800 text-white rounded-full w-6 h-6 flex items-center justify-center shrink-0">17</span>
                            <span className="text-sm text-slate-400">QuantosVieram</span>
                        </div>
                        <QuantosVieram />
                    </section>
                </div>


                <div className="space-y-6">
                    <section className="bg-white rounded-2xl border border-purple-100 p-6">
                        <div className="flex items-center gap-2 mb-4">
                            <span className="text-xs font-bold bg-slate-800 text-white rounded-full w-6 h-6 flex items-center justify-center shrink-0">18</span>
                            <span className="text-sm text-slate-400">QuantosVieram</span>
                        </div>
                        <QuantosVieram />
                    </section>
                </div>


                <div className="space-y-6">
                    <section className="bg-white rounded-2xl border border-purple-100 p-6">
                        <div className="flex items-center gap-2 mb-4">
                            <span className="text-xs font-bold bg-slate-800 text-white rounded-full w-6 h-6 flex items-center justify-center shrink-0">19</span>
                            <span className="text-sm text-slate-400">QuantosVieram</span>
                        </div>
                        <QuantosVieram />
                    </section>
                </div>


                <div className="space-y-6">
                    <section className="bg-white rounded-2xl border border-purple-100 p-6">
                        <div className="flex items-center gap-2 mb-4">
                            <span className="text-xs font-bold bg-slate-800 text-white rounded-full w-6 h-6 flex items-center justify-center shrink-0">20</span>
                            <span className="text-sm text-slate-400">QuantosVieram</span>
                        </div>
                        <QuantosVieram />
                    </section>
                </div>
            </div>
        </main>
    );
}