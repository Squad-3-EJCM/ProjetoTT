import { ComprasConatiner, ComprasView, ComprasViewImg, ComprasViewName, ComprasViewNamePrice, ComprasViewNotes, ComprasViewPrice, ComprasViewTop, MidCompras, TopCompras } from "./style";
import TopHome from "../../components/TopHome";

export default function Compras(){
    return(
        <ComprasConatiner>

            <TopCompras>
                <TopHome/>
            </TopCompras>

            <MidCompras>

                <ComprasView>
                    <ComprasViewTop>
                        <ComprasViewImg source={require("../../assets/gta.jpg")}/>
                        <ComprasViewNamePrice>
                            <ComprasViewName>GTA I</ComprasViewName>
                            <ComprasViewPrice>R$ 50,00</ComprasViewPrice>
                        </ComprasViewNamePrice>
                    </ComprasViewTop>
                    <ComprasViewNotes>Compra realizada em 12/02/2024</ComprasViewNotes>
                </ComprasView>

                <ComprasView>
                    <ComprasViewTop>
                        <ComprasViewImg source={require("../../assets/black.jpg")}/>
                        <ComprasViewNamePrice>
                            <ComprasViewName>Black</ComprasViewName>
                            <ComprasViewPrice>R$ 30,00</ComprasViewPrice>
                        </ComprasViewNamePrice>
                    </ComprasViewTop>
                    <ComprasViewNotes>Compra realizada em 24/02/2024</ComprasViewNotes>
                </ComprasView>

            </MidCompras>

        </ComprasConatiner>
    );
}