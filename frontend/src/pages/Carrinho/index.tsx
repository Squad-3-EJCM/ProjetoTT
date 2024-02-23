import { CarrinhoContainer, CarrinhoIcon, GameCart, LogoCarrinho, MidCarrinho, PayButton, PayButtonText, TitleCarrinho, TopCarrinho } from "./style";
import GameCard from "../../components/GameCard";
import TopHome from "../../components/TopHome";
import CheckBox from "../../components/Checkbox";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { Pressable } from "react-native";

export default function Carrinho(){
    const navigation = useNavigation();
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
                    <Pressable onPress={()=>navigation.navigate('Produto' as never)}><GameCard GameUrl={"gta.jpg"} Name={"GTA I"} Price={"50,00"}/></Pressable>
                </GameCart>

                <GameCart>
                    <CheckBox/>
                    <Pressable onPress={()=>navigation.navigate('Produto' as never)}><GameCard GameUrl={"pes97.jpg"} Name={"PES 97"} Price={"25,00"}/></Pressable>
                </GameCart>

                <GameCart>
                    <CheckBox/>
                    <Pressable onPress={()=>navigation.navigate('Produto' as never)}><GameCard GameUrl={"sonic.jpg"} Name={"Sonic 2"} Price={"37,00"}/></Pressable>
                </GameCart>

                <PayButton onPress={()=>navigation.navigate('Pay' as never)}>
                    <PayButtonText>Finalizar Pagamento</PayButtonText>
                </PayButton>

            </MidCarrinho>

        </CarrinhoContainer>
    );
}