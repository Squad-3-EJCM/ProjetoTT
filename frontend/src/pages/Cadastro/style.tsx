import styled from 'styled-components/native';
import { global } from '../../globalStyle';


export const ContainerCadastro = styled.View `
    flex: 1;
    background-color: ${global.colors.black};
    align-items: center;
    justify-content: center;
`;
 
export const Logo = styled.Image`
    width: 323px;
    height: 110px;
    margin-bottom: 100px;
`;

export const ContainerCadastro2 = styled.View `
    display: flex;
    flex-direction:row;
    align-items: center;
    justify-content:center;
    gap: 5px;
    margin-bottom: 48px;
    border-bottom-width:1px;
    border-bottom-color:${global.colors.gray};
`;

export const Email = styled.Image`
    width: 20px;
    height: 20px;
` ;

export const Senha = styled.Image `
    width: 16px;
    height: 20px;
`;

export const Input = styled.TextInput`
    width: 260px;
    height: 33px;
    color: ${global.colors.gray};
    padding: 5px;
    outline-color: ${global.colors.black};
    border-width: 0;
    font-family: 'Chakra-Regular';
`;

export const Botao2 = styled.Pressable `
    background-color: ${global.colors.purple};
    width: 204px;
    height: 42px;
    justify-content: center;
    align-items:center;
    border-radius: 15px;
    margin-bottom: 40px;
`;

export const BotaoTexto2 = styled.Text`
    color: ${global.colors.gray};
    font-family: 'Chakra-Medium';
    font-size: 18px;
    font-style: normal;
`;

export const ContainerCadastro3 = styled.View`
    display: flex;
    flex-direction: row;
    justify-content: center;
    gap: 10px;
    margin-bottom: 50px;
    margin-left: 40px;
`;

export const CheckboxText = styled.Text`
    width: 70%;
    align-items: center;
    justify-self: center;
    font-size: 16px;
    font-family: 'Chakra-Regular';
    color: #F1F1E6;
`;
