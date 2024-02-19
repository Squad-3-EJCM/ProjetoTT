import styled from 'styled-components/native';
import { global } from '../../globalStyle';

export const Container = styled.View`
  flex: 1;
  background-color: ${global.colors.black};
  align-items: center;
  justify-content: center;
`;

export const Logo = styled.Image`
  width: 323px;
  height: 110px;
  margin-bottom: 70px;
`;

export const Container2 = styled.View `
  width: 312px;
  height: 110px;
  border-radius: 15px;
  background-color: ${global.colors.purple};
  margin-bottom: 50px;
  gap: 10px;
`;

export const Title = styled.Text`
  margin-top: 10px;
  font-family: 'ChakraPetch-Bold';
  font-weight: bold;
  font-size: 22px;
  color: ${global.colors.gray};
  margin-left: 5px;
  margin-right: 5px; 
`;

export const Message = styled.Text `
  margin-left: 5px;
  margin-right: 5px;
  font-family:'Chakra Petch';
  font-size: 16px;
  color: ${global.colors.white};
`;

export const Botao2 = styled.Pressable`
  background-color: ${global.colors.green};
  width: 276px;
  height: 42px;
  justify-content: center;
  align-items:center;
  border-radius: 15px;
  margin-bottom: 40px; 
`;

export const BotaoTexto2 = styled.Text`
  color: ${global.colors.black};
  align-self: center;
  font-family: 'CHAKRA PETCH';
  font-size: 18px;
  font-style: normal;
`;
