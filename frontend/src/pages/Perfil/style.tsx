import styled from "styled-components/native";
import { global } from "../../globalStyle";

export const PerfilContainer = styled.View`
    flex: 1;
    display: flex;
    background-color: ${global.colors.black};
    flex-direction: column;
    gap: 80px;
`;

export const TopPerfil = styled.View`
    display: flex;
    flex-direction: row;
    align-self: center;
    justify-content: space-between;
    width: 430px;
    margin-top: 40px;
    z-index: 2;
`;

export const MidPerfil = styled.View`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 25px;
`;

export const Menu = styled.Image`
    width: 24px;
    height: 24px;
    align-self: flex-start;
    justify-self: flex-start;
`;

export const FotoPerfil = styled.Image`
    width: 210px;
    height: 210px;
`;

export const Name = styled.Text`
    font-family: 'Chakra-medium';
    font-size: 20px;
    color: ${global.colors.white};
`;

export const BotaoPerfil1 = styled.Pressable`
    width: 310px;
    height: 48px;
    border-radius: 15px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    background-color: ${global.colors.purple};
`;

export const InnerButton = styled.View`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
`;

export const TextButton = styled.Text`
    font-family: 'Chakra-medium';
    font-size: 20px;
    color: ${global.colors.gray};
    margin-left: 10px;
`;

export const TextButton2 = styled.Text`
    font-family: 'Chakra-medium';
    font-size: 14px;
    color: #d2d2d272;
`;

export const ButtonImage = styled.Image`
    width: 24px;
    height: 24px;
`;

export const BotaoPerfil2 = styled.Pressable`
    width: 310px;
    height: 48px;
    border-radius: 15px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    background-color: ${global.colors.green};
`;

export const TextButton3 = styled.Text`
    font-family: 'Chakra-medium';
    font-size: 20px;
    color: ${global.colors.black};
    margin-left: 10px;
`;

export const ButtonImage2 = styled.Image`
    width: 24px;
    height: 24px;
`;

export const ModImg = styled.Image`
    width: 110px;
    height: 24px;
    margin-right: 15px;
`;

