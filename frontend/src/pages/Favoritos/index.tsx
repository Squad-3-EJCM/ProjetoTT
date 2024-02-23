import { FavoritosContainer, FavoritoIcon, GameCart, LogoFavoritos, MidFavoritos, TituloFavoritos, TopFavoritos } from "./style";
import GameCard from "../../components/GameCard";
import TopHome from "../../components/TopHome";
import Heart from "../../components/Heart";
import React from "react";
import { Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function Favoritos(){
    const navigation = useNavigation();
    return(
        <FavoritosContainer>
            <TopFavoritos>
                <TopHome/>
            </TopFavoritos>
            <LogoFavoritos>
                <TituloFavoritos>Favoritos</TituloFavoritos>
                <FavoritoIcon source={require("../../assets/Coração.png")}/>
            </LogoFavoritos>
            <MidFavoritos>
                <GameCart>
                    <Heart/>
                    <Pressable onPress={()=>navigation.navigate('Produto' as never)}><GameCard GameUrl={"gta.jpg"} Name={"GTA I"} Price={"50,00"}/></Pressable>
                    
                </GameCart>

                <GameCart>
                    <Heart/>
                    <Pressable onPress={()=>navigation.navigate('Produto' as never)}><GameCard GameUrl={"pes97.jpg"} Name={"PES 97"} Price={"25,00"}/></Pressable>
                    
                </GameCart>

                <GameCart>
                    <Heart/>
                    <Pressable onPress={()=>navigation.navigate('Produto' as never)}><GameCard GameUrl={"sonic.jpg"} Name={"Sonic 2"} Price={"37,00"}/></Pressable>
                    
                </GameCart>

            </MidFavoritos>

        </FavoritosContainer>
    );
}