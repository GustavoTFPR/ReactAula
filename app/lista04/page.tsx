import Link from "next/link";
import InputControlado from "@/components/lista04/InputControlado";
import DoisInputs from "@/components/lista04/DoisInputs";
import ObjetoNoEstado from "@/components/lista04/ObjetoNoEstado";
import OnChangeGenerico from "@/components/lista04/OnChangeGenerico";
import SubmitPreventDefault from "@/components/lista04/SubmitPreventDefault";
import MostrarAoEnviar from "@/components/lista04/MostrarAoEnviar";
import NomeObrigatorio from "@/components/lista04/NomeObrigatorio";
import SelectControlado from "@/components/lista04/SelectControlado";
import CheckboxControlado from "@/components/lista04/CheckboxControlado";
import RadioControlado from "@/components/lista04/RadioControlado";

export default function Lista04() {
    return (
        <main className="min-h-screen bg-slate-50">
            <div className="max-w-3xl mx-auto px-6 py-12">
                <div className="mb-10">
                    <Link
                        href="/"
                        className="inline-flex items-center gap-1.5 text-sm font-medium text-slate-600 bg-white border border-slate-200 rounded-full px-4 py-2 shadow-sm hover:bg-slate-800 hover:text-white hover:border-slate-800 transition-colors">
                        <span aria-hidden>←</span>Voltar
                    </Link>
                    <h1 className="text-3xl font-bold text-slate-800 mt-2">Lista 04</h1>
                    <p className="text-slate-500 mt-1">Formulários</p>
                </div>

                <div className="space-y-6">
                    <section className="bg-white rounded-2xl border border-purple-100 p-6">
                        <div className="flex items-center gap-2 mb-4">
                            <span className="text-xs font-bold bg-slate-800 text-white rounded-full w-6 h-6 flex items-center justify-center shrink-0">01</span>
                            <span className="text-sm text-slate-400">InputControlado</span>
                        </div>
                        <InputControlado />
                    </section>

                    <section className="bg-white rounded-2xl border border-purple-100 p-6">
                        <div className="flex items-center gap-2 mb-4">
                            <span className="text-xs font-bold bg-slate-800 text-white rounded-full w-6 h-6 flex items-center justify-center shrink-0">02</span>
                            <span className="text-sm text-slate-400">DoisInputs</span>
                        </div>
                        <DoisInputs />
                    </section>

                    <section className="bg-white rounded-2xl border border-purple-100 p-6">
                        <div className="flex items-center gap-2 mb-4">
                            <span className="text-xs font-bold bg-slate-800 text-white rounded-full w-6 h-6 flex items-center justify-center shrink-0">03</span>
                            <span className="text-sm text-slate-400">ObjetoNoEstado</span>
                        </div>
                        <ObjetoNoEstado />
                    </section>

                    <section className="bg-white rounded-2xl border border-purple-100 p-6">
                        <div className="flex items-center gap-2 mb-4">
                            <span className="text-xs font-bold bg-slate-800 text-white rounded-full w-6 h-6 flex items-center justify-center shrink-0">04</span>
                            <span className="text-sm text-slate-400">OnChangeGenerico</span>
                        </div>
                        <OnChangeGenerico />
                    </section>

                    <section className="bg-white rounded-2xl border border-purple-100 p-6">
                        <div className="flex items-center gap-2 mb-4">
                            <span className="text-xs font-bold bg-slate-800 text-white rounded-full w-6 h-6 flex items-center justify-center shrink-0">05</span>
                            <span className="text-sm text-slate-400">SubmitPreventDefault</span>
                        </div>
                        <SubmitPreventDefault />
                    </section>

                    <section className="bg-white rounded-2xl border border-purple-100 p-6">
                        <div className="flex items-center gap-2 mb-4">
                            <span className="text-xs font-bold bg-slate-800 text-white rounded-full w-6 h-6 flex items-center justify-center shrink-0">06</span>
                            <span className="text-sm text-slate-400">MostrarAoEnviar</span>
                        </div>
                        <MostrarAoEnviar />
                    </section>

                    <section className="bg-white rounded-2xl border border-purple-100 p-6">
                        <div className="flex items-center gap-2 mb-4">
                            <span className="text-xs font-bold bg-slate-800 text-white rounded-full w-6 h-6 flex items-center justify-center shrink-0">07</span>
                            <span className="text-sm text-slate-400">NomeObrigatorio</span>
                        </div>
                        <NomeObrigatorio />
                    </section>

                    <section className="bg-white rounded-2xl border border-purple-100 p-6">
                        <div className="flex items-center gap-2 mb-4">
                            <span className="text-xs font-bold bg-slate-800 text-white rounded-full w-6 h-6 flex items-center justify-center shrink-0">08</span>
                            <span className="text-sm text-slate-400">SelectControlado</span>
                        </div>
                        <SelectControlado />
                    </section>

                    <section className="bg-white rounded-2xl border border-purple-100 p-6">
                        <div className="flex items-center gap-2 mb-4">
                            <span className="text-xs font-bold bg-slate-800 text-white rounded-full w-6 h-6 flex items-center justify-center shrink-0">09</span>
                            <span className="text-sm text-slate-400">CheckboxControlado</span>
                        </div>
                        <CheckboxControlado />
                    </section>

                    <section className="bg-white rounded-2xl border border-purple-100 p-6">
                        <div className="flex items-center gap-2 mb-4">
                            <span className="text-xs font-bold bg-slate-800 text-white rounded-full w-6 h-6 flex items-center justify-center shrink-0">10</span>
                            <span className="text-sm text-slate-400">RadioControlado</span>
                        </div>
                        <RadioControlado />
                    </section>
                </div>
            </div>
        </main>
    );
}
