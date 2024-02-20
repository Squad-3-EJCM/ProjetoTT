import styled from "styled-components/native";
import { global } from "../../globalStyle";

export const GameCardConatiner = styled.View`
    width: 210px;
    height: 113px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    background-color: ${global.colors.green};
    gap: 10px;
    border-radius: 10px;
`
export const GameImg = styled.Image`
    width: 100px;
    height: 100px;
    border-radius: 10px;
    border: solid ${global.colors.black}
`;

export const NamePriceConatiner = styled.View`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 20px;
`;

export const GameName = styled.Text`
    font-family: 'Chakra-medium';
    font-size: 24px;
    color: ${global.colors.black}
`;

export const GamePrice = styled.Text`
    font-family: 'Chakra-medium';
    font-size: 20px;
    color: ${global.colors.black};
`;