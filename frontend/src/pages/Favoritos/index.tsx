import { FavoritosContainer, FavoritoIcon, GameCart, LogoFavoritos, MidFavoritos, TituloFavoritos, TopFavoritos } from "./style";
import GameCard from "../../components/GameCard";
import TopHome from "../../components/TopHome";
import Heart from "../../components/Heart";
import React from "react";

export default function Favoritos(){
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
                    <GameCard GameUrl={"gta.jpg"} Name={"GTA I"} Price={"50,00"}/>
                </GameCart>

                <GameCart>
                    <Heart/>
                    <GameCard GameUrl={"black.jpg"} Name={"Black"} Price={"30,00"}/>
                </GameCart>

                <GameCart>
                    <Heart/>
                    <GameCard GameUrl={"sonic.jpg"} Name={"Sonic 2"} Price={"37,00"}/>
                </GameCart>

            </MidFavoritos>

        </FavoritosContainer>
    );
}