import styled from 'styled-components/native';
import { global } from '../../globalStyle';

export const TextoVisitante = styled.Text`
  font-family:  'Chakra Petch';
  font-size: 16px;
  color:#F1F1E6;
`;

export const Botao = styled.Pressable `
  background-color: ${global.colors.green};
  width: 276px;
  height: 42px;
  justify-content: center;
  align-items:center;
  border-radius: 15px;
  margin-bottom: 40px;
`;

export const BotaoTexto = styled.Text`
  color: ${global.colors.black};
  font-family: 'CHAKRA PETCH';
  font-size: 18px;
  font-style: normal;
`;
