import {BottomPage, ContainerHome, GameList,  MidPage, TopPage, Products, BottomText, LogoMenor} from './style';
import ProdutHome, { Info } from "../../components/ProductHome";
import TopHome from '../../components/TopHome';
import React from 'react';
import { ListRenderItem } from 'react-native';

export default function Home(){
    const infoArray: Array<Info> = [
        {GameUrl: 'gta.jpg', Name: 'GTA I', Price: '50,00'},
        {GameUrl: 'sonic.jpg', Name: 'Sonic 2', Price: '50,00'},
        {GameUrl: 'pes97.jpg', Name: 'Pes 97', Price: '50,00'},
        {GameUrl: 'black.jpg', Name: 'Black', Price: '50,00'},
        {GameUrl: 'mk2.jpg', Name: 'Mortal Kombat II', Price: '50,00'},
        {GameUrl: 'ronaldinho.jpg', Name: 'Ronaldinho 64', Price: '10,00'},
        {GameUrl: 'mega-drive.jpg', Name: 'Mega Drive', Price: '500,00'},
        {GameUrl: 'mirrorsedge.jpg', Name: 'Mirrors Edge', Price: '20,00'},
        {GameUrl: 'ff6.jpg', Name: 'Final Fantasy VI', Price: '30,00'},
        {GameUrl: 'mario64.jpg', Name: 'Super Mario 64', Price: '50,00'},
        {GameUrl: 'bomba.jpg', Name: 'Bomba Patch', Price: '10,00'},
        {GameUrl: 'residentevil.png', Name: 'Resident Evil I', Price:'45,00'}
    ]

    return(
        <ContainerHome>
            <TopPage>
                <TopHome/>
            </TopPage>

            <MidPage>
                <GameList data={infoArray} numColumns={2}
                    columnWrapperStyle={{justifyContent: 'space-between'}}
                    renderItem={({item: {GameUrl, Name, Price}}) => (
                        <ProdutHome GameUrl={GameUrl} Name={Name} Price={Price}/>
                    )}
                />
                
            </MidPage>

            <BottomPage>
                <BottomText>Todos os direitos reservados</BottomText>
                <LogoMenor source={require("../../assets/Logomenor.png")}/>
            </BottomPage>


        </ContainerHome>
    );
}
