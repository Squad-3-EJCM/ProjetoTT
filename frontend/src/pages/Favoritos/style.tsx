import styled from "styled-components/native";
import { global } from "../../globalStyle";

export const FavoritosContainer = styled.View`
    display: flex;
    flex-direction: column;
    flex: 1;
    background-color: ${global.colors.black};
    gap: 60px;
`;

export const TopFavoritos = styled.View`
`;

export const LogoFavoritos = styled.View`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

export const TituloFavoritos = styled.Text`
    font-family: 'Chakra-medium';
    font-size: 36px;
    color: ${global.colors.gray};
`;

export const FavoritoIcon = styled.Image`
    width: 48px;
    height: 48px;
`;

export const MidFavoritos = styled.View`
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
