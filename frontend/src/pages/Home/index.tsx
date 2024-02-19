import {Image, Text, View, TextInput, Pressable} from 'react-native';
import {BottomPage, ContainerHome, MidPage, TopPage, Products, BottomText, LogoMenor} from './style';
import ProdutHome from "../../components/ProductHome";
import TopHome from '../../components/TopHome';
import React from 'react';

export default function Home(){
    return(
        <ContainerHome>
            <TopPage>
                <TopHome/>
            </TopPage>

            <MidPage>
                <Products>
                    <ProdutHome GameUrl={"gta.jpg"} Name={"GTA I"} Price={"50,00"}/>
                    <ProdutHome GameUrl={"sonic.jpg"} Name={"Sonic 2"} Price={"37,00"}/>
                </Products>
                <Products>
                    <ProdutHome GameUrl={"pes97.jpg"} Name={"Pes 97"} Price={"25,00"}/>
                    <ProdutHome GameUrl={"black.jpg"} Name={"Black"} Price={"30,00"}/>
                </Products>
                <Products>
                    <ProdutHome GameUrl={"mk2.jpg"} Name={"Mortal Kombat II"} Price={"30,00"}/>
                    <ProdutHome GameUrl={"ronaldinho.jpg"} Name={"Ronaldinho 64"} Price={"10,00"}/>
                </Products>
                <Products>
                    <ProdutHome GameUrl={"mega-drive.jpg"} Name={"Mega Drive"} Price={"500,00"}/>
                    <ProdutHome GameUrl={"mirrorsedge.jpg"} Name={"Mirrors Edge"} Price={"20,00"}/>
                </Products>
                <Products>
                    <ProdutHome GameUrl={"ff6.jpg"} Name={"Final Fantasy VI"} Price={"30,00"}/>
                    <ProdutHome GameUrl={"mario64.jpg"} Name={"Super Mario 64"} Price={"50,00"}/>
                </Products>
                <Products>
                    <ProdutHome GameUrl={"bomba.jpg"} Name={"Bomba Patch"} Price={"10,00"}/>
                    <ProdutHome GameUrl={"residentevil.png"} Name={"Resident Evil I"} Price={"45,00"}/>
                </Products>
                
            </MidPage>

            <BottomPage>
                <BottomText>Todos os direitos reservados</BottomText>
                <LogoMenor source={require("../../assets/Logomenor.png")}/>
            </BottomPage>


        </ContainerHome>
    );
}
