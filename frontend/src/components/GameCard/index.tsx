import { GameCardConatiner, GameImg, GameName, GamePrice, NamePriceConatiner } from "./style";


export type Game = {
    GameUrl: string;
    Name: string;
    Price: string;
}

export default function GameCard({GameUrl, Name, Price}: Game){
    return(
        <GameCardConatiner>
            <GameImg source={require('../../assets/' + GameUrl)}/>
            <NamePriceConatiner>
                <GameName>{Name}</GameName>
                <GamePrice>R${Price}</GamePrice>
            </NamePriceConatiner>
        </GameCardConatiner>
    );
}