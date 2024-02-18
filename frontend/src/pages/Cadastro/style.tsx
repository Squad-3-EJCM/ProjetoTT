import styled from 'styled-components/native';
import { global } from '../../globalStyle';


export const Container = styled.View `
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

export const Container2 = styled.View `
    display: flex;
    flex-direction:row;
    align-items: center;
    justify-content:center;
    gap: 5px;
    margin-bottom: 68px;
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

