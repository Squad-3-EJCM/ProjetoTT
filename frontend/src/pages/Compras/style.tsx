import styled from "styled-components/native";
import { global } from "../../globalStyle";

export const ComprasConatiner = styled.View`
    flex: 1;
    display: flex;
    flex-direction: column;
    background-color: ${global.colors.black};
    gap: 130px;
`;

export const TopCompras = styled.View`
    z-index: 2;
`;

export const MidCompras = styled.View`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 40px;
`;

export const ComprasView = styled.View`
    width: 312px;
    height: 213px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    border-radius: 10px;
    background-color: ${global.colors.purple};
    gap: 40px;
`;

export const ComprasViewTop = styled.View`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 60px;
    margin-left: 15px;
    margin-top: 15px;
    
`;

export const ComprasViewImg = styled.Image`
    width: 100px;
    height: 100px;
    border: solid ${global.colors.black};
`;

export const ComprasViewNamePrice = styled.View`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 20px;
`;

export const ComprasViewName = styled.Text`
    font-family: 'Chakra-medium';
    font-size: 24px;
    color: ${global.colors.white};
`;

export const ComprasViewPrice = styled.Text`
    font-family: 'Chakra-medium';
    font-size: 20px;
    color: ${global.colors.white};
`;

export const ComprasViewNotes = styled.Text`
    margin-left: 15px;
    font-family: 'Chakra-medium';
    font-size: 15px;
    color: ${global.colors.white};
`;