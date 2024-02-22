import styled from "styled-components/native";
import { global } from "../../globalStyle";

export const CommentContainer = styled.View`
    width: 307px;
    height: 80px;
    border-radius: 16px;
    display: flex;
    flex-direction: column;
    background-color: ${global.colors.green};
`;

export const CommentTopView = styled.View`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    gap: 10px;
`;
 
export const UserFoto = styled.Image`
    width: 30px;
    height: 30px;
    border: solid ${global.colors.black};
    border-radius: 50px;
    margin-left: 10px;
    margin-top: 10px;
`;

export const UserName = styled.Text`
    font-family: 'Chakra-regular';
    font-size: 12px;
    font-weight: bold;
    color: ${global.colors.black};
`;

export const Comments = styled.Text`
    font-family: 'Chakra-regular';
    font-size: 10px;
    font-weight: 800;
    color: ${global.colors.black};
    align-self: center;
    justify-content: center;
    margin-left: 35px;
`;

export const UserView = styled.View`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    gap: 10px;
`;

export const ModFix = styled.Image`
    width: 10px;
    height: 10px;
    margin-right: 10px;
`;