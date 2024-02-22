import { CarrinhoContainer, CarrinhoIcon, GameCart, LogoCarrinho, MidCarrinho, PayButton, PayButtonText, TitleCarrinho, TopCarrinho } from "./style";
import GameCard from "../../components/GameCard";
import TopHome from "../../components/TopHome";
import CheckBox from "../../components/Checkbox";
import React from "react";

export default function Carrinho(){
    return(
        <CarrinhoContainer>
            <TopCarrinho>
                <TopHome/>
            </TopCarrinho>
            <LogoCarrinho>
                <TitleCarrinho>Carrinho</TitleCarrinho>
                <CarrinhoIcon source={require("../../assets/cart.png")}/>
            </LogoCarrinho>
            <MidCarrinho>
                <GameCart>
                    <CheckBox/>
                    <GameCard GameUrl={"gta.jpg"} Name={"GTA I"} Price={"50,00"}/>
                </GameCart>

                <GameCart>
                    <CheckBox/>
                    <GameCard GameUrl={"black.jpg"} Name={"Black"} Price={"30,00"}/>
                </GameCart>

                <GameCart>
                    <CheckBox/>
                    <GameCard GameUrl={"sonic.jpg"} Name={"Sonic 2"} Price={"37,00"}/>
                </GameCart>

                <PayButton>
                    <PayButtonText>Finalizar Pagamento</PayButtonText>
                </PayButton>

            </MidCarrinho>

        </CarrinhoContainer>
    );
}