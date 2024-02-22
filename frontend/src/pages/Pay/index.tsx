import TopHome from "../../components/TopHome";
import GameCard from "../../components/GameCard";
import CheckBox from "../../components/Checkbox";
import { AddressText, AddressView, BotPay, MidPay, Option, OptionView, PayButton, PayButtonTxt, PayContainer, PayOption, PayProduct, PaySubtitle, PayTitle, TopPay } from "./style";

export default function Pay(){
    return(
        <PayContainer>

            <TopPay>
                <TopHome/>
            </TopPay>

            <MidPay>

                <PayTitle>Finalizar Pagamento</PayTitle>

                <PayProduct>
                    <PaySubtitle>Produto</PaySubtitle>
                    <GameCard GameUrl={"gta.jpg"} Name={"GTA I"} Price={"50,00"}/>
                </PayProduct>

                <PayProduct>
                    <PaySubtitle>Endereço de Entrega</PaySubtitle>
                    <AddressView>
                        <AddressText>Rua Sobral 75, Meier, Rio de Janeiro, RJ</AddressText>
                    </AddressView>
                </PayProduct>

                <PayProduct>
                    <PaySubtitle>Forma de Pagamento</PaySubtitle>
                    <OptionView>
                        <Option>
                            <CheckBox/>
                            <PayOption>Pix</PayOption>
                        </Option>

                        <Option>
                            <CheckBox/>
                            <PayOption>Cartão</PayOption>
                        </Option>

                        <Option>
                            <CheckBox/>
                            <PayOption>Boleto</PayOption>
                        </Option>
                    </OptionView>
                </PayProduct>

            </MidPay>

            <BotPay>

                <PayButton>
                    <PayButtonTxt>Pagar</PayButtonTxt>
                </PayButton>

            </BotPay>

        </PayContainer>
    );
}