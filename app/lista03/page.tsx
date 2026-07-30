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
            <AlertOnClique/>
            <ContadorMaisUm/>
            <MenosUmEZerar/>
            <ParOuImpar/>
            <ToggleLigaDesliga/>
            <MostrarEsconder/>
            <TrocaCor/>
            <InputControlado/>
            <ContarCaracteres/>
            <ResetarInput/>
    </main>
);
}