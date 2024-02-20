import {BottomPage, ContainerHome, MidPage, TopPage, BottomText, LogoMenor, GameList } from './style';
import ProdutHome, { Info } from "../../components/ProductHome";
import TopHome from '../../components/TopHome';

export default function Home(){

    const infoArray: Array<Info> = [
        {GameUrl: 'gta.jpg', Name: 'GTA I', Price: '50,00'},
        {GameUrl: 'sonic.jpg', Name: 'Sonic 2', Price: '50,00'},
        {GameUrl: 'pes97.jpg', Name: 'Pes 97', Price: '50,00'},
        {GameUrl: 'black.jpg', Name: 'Black', Price: '50,00'},
        {GameUrl: 'mk2.jpg', Name: 'Mortal Kombat II', Price: '50,00'}
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
