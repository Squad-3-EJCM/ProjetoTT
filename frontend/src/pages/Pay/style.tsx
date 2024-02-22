import styled from "styled-components/native";
import { global } from "../../globalStyle";

export const PayContainer = styled.View`
    flex: 1;
    display: flex;
    flex-direction: column;
    background-color: ${global.colors.black};
    gap: 40px;
`;

export const TopPay = styled.View`

`;

export const MidPay = styled.View`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 30px;
`;

export const BotPay = styled.View`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

export const PayTitle = styled.Text`
    font-family: 'Chakra-medium';
    font-size: 32px;
    color: ${global.colors.gray};
`;

export const PayProduct = styled.View`
    width: 307px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 14px;
`;

export const PaySubtitle = styled.Text`
    font-family: 'Chakra-medium';
    font-size: 20px;
    color: ${global.colors.white};
    align-self: flex-start;
`;

export const AddressView = styled.View`
    width: 312px;
    height: 60px;
    justify-content: center;
    align-items: center;
    background-color: ${global.colors.purple};
    border-radius: 15px;
`;

export const AddressText = styled.Text`
    font-family: 'Chakra-medium';
    font-size: 14px;
    color: ${global.colors.white};
`;

export const PayOption = styled.Text`
    font-family: 'Chakra-medium';
    font-size: 15px;
    color: ${global.colors.white};
`;

export const PayButton = styled.Pressable`
    width: 180px;
    height: 48px;
    border-radius: 20px;
    background-color: ${global.colors.green};
    align-items: center;
    justify-content: center;
`;

export const PayButtonTxt = styled.Text`
    font-family: 'Chakra-medium';
    font-size: 20px;
    color: ${global.colors.black};
`;

export const OptionView = styled.View`
    width: 307px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`;

export const Option = styled.View`
    display: flex;
    flex-direction: row;
    gap: 5px;
`;