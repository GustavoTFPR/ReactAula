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
    <main className="p-6">
        <AninharComponentes/>
        <ArrayObjetosCards/>
        <BadgeReutilizavel/>
        <CondicionalComAnd nome="Gustavo" vip={true}/>
        <DesestruturarProps nome="Gustavo" cargo="Desenvolvedor de Sistemas"/>
        <DuasProps nome="Gustavo" cargo="Desenvolvedor de Sistemas"/>
        <FilterMap/>
        <GradeDeCards/>
        <KeyCorreta/>
        <ListaDeProdutos/>
        <ListaGenerica itens={["Item 1", "Item 2", "Item 3"]}/>
        <ListaMap/>
        <MapComIndice/>
        <PrimeiraProp nome="Gustavo"/>
        <PropBoolean ativo={true}/>
        <PropNumerica anos={30}/>
        <PropParagrafo cargo="Desenvolvedor de Sistemas"/>
        <PropsChildren>
            <p>Este é um conteúdo passado como children.</p>
        </PropsChildren>
        <TabelaViaMap/>
        <TernarioJSX online={true}/>
        <ValorPadrao/>
        </main>
        );
}