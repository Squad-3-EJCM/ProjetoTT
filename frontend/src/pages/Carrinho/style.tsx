import styled from "styled-components/native";
import { global } from "../../globalStyle";

export const CarrinhoContainer = styled.View`
    display: flex;
    flex-direction: column;
    flex: 1;
    background-color: ${global.colors.black};
    gap: 60px;
`;

export const TopCarrinho = styled.View`
`;

export const LogoCarrinho = styled.View`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

export const TitleCarrinho = styled.Text`
    font-family: 'Chakra-medium';
    font-size: 36px;
    color: ${global.colors.gray};
`;

export const CarrinhoIcon = styled.Image`
    width: 48px;
    height: 48px;
`;

export const MidCarrinho = styled.View`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 60px;
`;

export const GameCart = styled.View`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 20px;
`;

export const PayButton = styled.Pressable`
    width: 180px;
    height: 48px;
    border-radius: 20px;
    background-color: ${global.colors.purple};
    justify-content: center;
    align-items: center;
    margin-top: 20px;
`;

export const PayButtonText = styled.Text`
    font-family: 'Chakra-medium';
    font-size: 16px;
    color: ${global.colors.gray};
`;
