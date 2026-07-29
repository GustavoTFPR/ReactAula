import AlertOnClique from "@/components/lista03/AlertOnClick";
import ContadorMaisUm from "@/components/lista03/Contador+1";
import MenosUmEZerar from "@/components/lista03/MenosUmEZerar";
import ParOuImpar from "@/components/lista03/ParOuImpar";
import ToggleLigaDesliga from "@/components/lista03/ToggleLigaDesliga";

export default function Lista03() {
    return (
    <main className="p-6">
            <AlertOnClique/>
            <ContadorMaisUm/>
            <MenosUmEZerar/>
            <ParOuImpar/>
            <ToggleLigaDesliga/>
        </main>
    )
}