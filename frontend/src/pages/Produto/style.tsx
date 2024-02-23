import styled from "styled-components/native";
import { global } from "../../globalStyle";

export const ProdutoContainer = styled.ScrollView`
    flex: 1;
    display: flex;
    flex-direction: column;
    background-color: ${global.colors.black};
    gap: 20px;
`;

export const TopProduto = styled.View`
    z-index: 2;
`;
 
export const MidProduto = styled.View`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 20px;
`;

export const BotProduto = styled.View`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 20px;
`;

export const TitleView = styled.View`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 15px;
`;

export const TitleViewTxt = styled.Text`
    font-family: 'Chakra-regular';
    font-size: 32px;
    font-weight: 500;
    color: ${global.colors.purple};
`;

export const ProdutoImg = styled.Image`
    width: 218px;
    height: 218px;
`;

export const Subtitle = styled.Text`
    font-family: 'Chakra-regular';
    font-size: 20px;
    font-weight: 500;
    color: ${global.colors.purple};
    align-self: flex-start;
`;

export const Description = styled.Text`
    font-family: 'Chakra-regular';
    font-size: 14px;
    font-weight: 500;
    text-align: justify;
    width:307px;
    height: 162px;
    color: ${global.colors.gray};
`;

export const DescricaoView = styled.View`
    display: flex;
    flex-direction: column;
    gap: 10px;
`;

export const TitleImag = styled.View`
    display: flex;
    flex-direction: column;
    gap: 10px;
    justify-content: center;
    align-items: center;
`;

export const ButtonView = styled.View`
    display: flex;
    flex-direction: column;
    gap: 10px;
    justify-content: center;
    align-items: center;
`;

export const CommentView = styled.View`
    display: flex;
    flex-direction: column;
    gap: 10px;
    justify-content: center;
    align-items: center;
    margin-bottom: 10px;
`;

export const ProdutoButton1 = styled.Pressable`
    width: 215px;
    height: 32px;
    border-radius: 15px;
    align-items: center;
    justify-content: center;
    background-color: ${global.colors.purple};
`;
 
export const ProdutoButton2 = styled.Pressable`
    width: 215px;
    height: 32px;
    border-radius: 15px;
    align-items: center;
    justify-content: center;
    background-color: ${global.colors.green};
`;

export const ProdutoButton3 = styled.Pressable`
    width: 60px;
    height: 20px;
    background-color: ${global.colors.purple};
    align-items: center;
    justify-content: center;
    align-self: flex-end;
    border-radius: 5px;
`;

export const Line = styled.Image`
    width: 307px;
    height: 2px;
    align-items: center;
    justify-content: center;
`;

export const Button1Text = styled.Text`
    font-family: 'Chakra-medium';
    font-size: 14px;
    align-self: center;
    justify-self: center;
    color: ${global.colors.gray};
`;

export const Button2Text = styled.Text`
    font-family: 'Chakra-medium';
    font-size: 14px;
    align-self: center;
    justify-self: center;
    color: ${global.colors.black};
`;

export const Button3Text = styled.Text`
    font-family: 'Chakra-medium';
    font-size: 10px;
    font-weight: 500;
    color: ${global.colors.gray};
`;

export const CommentInput = styled.TextInput`
    width: 307px;
    height: 100px;
    border-radius: 5px;
    padding-left: 10px;
    background-color: ${global.colors.green};
`;

export const ModEdit = styled.Image`
    width: 24px;
    height: 24px;
`;