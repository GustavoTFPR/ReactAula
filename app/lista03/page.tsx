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


export default function Lista03() {
    return (
        <main className="p-6">
            <div className="mb-10">
                <Link
                    href="/"
                    className="inline-flex items-center gap-1.5 text-sm font-medium text-slate-600 bg-white border border-slate-200 rounded-full px-4 py-2 shadow-sm hover:bg-slate-800 hover:text-white hover:border-slate-800 transition-colors">
                    <span aria-hidden>←</span>Voltar
                </Link>
            </div>
            <AlertOnClique />
            <ContadorMaisUm />
            <MenosUmEZerar />
            <ParOuImpar />
            <ToggleLigaDesliga />
            <MostrarEsconder />
            <TrocaCor />
            <InputControlado />
            <ContarCaracteres />
            <ResetarInput />
        </main>
    );
}