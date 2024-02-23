import styled from "styled-components/native";
import { global } from "../../globalStyle";
import { Animated } from "react-native";

export const MenuConatiner = styled(Animated.View)`
    position: fixed;
    top: 0;
    left: 0;
    width: 205px;
    height: 932px;
    background-color: ${global.colors.white};
    border-top-right-radius: 15px;
    border-bottom-right-radius: 15px;
    display: flex;
    flex-direction: column;
    gap: 30px;
    z-index: 2;
`;

export const TopMenu = styled.View`
    align-items: center;
    justify-content: center;
    margin-top: 40px;
`;

export const MidMenu = styled.View`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    gap: 25px;
`;

export const BotMenu = styled.View`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    gap: 25px;
    margin-left: 24px;
`;

export const MenuButton = styled.Pressable`
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-left: 24px;
    gap: 5px;
`;

export const MenuIcon = styled.Image`
    width: 24px;
    height: 24px;
`;

export const MenuTxt = styled.Text`
    font-family: 'Chakra-regular';
    font-size: 16px;
    color: ${global.colors.black};
`;

export const MenuLogo = styled.Image`
    width: 159px;
    height: 62px;
`;

export const MenuBotText = styled.Text`
    font-family: 'Chakra-regular';
    font-size: 16px;
    color: ${global.colors.black};
`;

export const MenuAllContainer = styled.Pressable`
    width: 100%;
    height: 100%;
    position: fixed;
    z-index: 2;
    top: 0;
    background-color: #00000056;
`;

export const IconStart = styled.Image`
    width: 24px;
    height: 24px;
`;