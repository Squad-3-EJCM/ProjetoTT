import styled from 'styled-components/native';
import { global } from '../../globalStyle';

export const ProductHomeContainer = styled.Pressable `
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 115px;
  height: 143px;
  border-radius: 5px;
  background-color: ${global.colors.purple};
  margin-bottom: 30px;
`;

export const ProductHomeJogo = styled.Image`
  width: 80px;
  height: 90px;
  border-color: ${global.colors.black};
`;

export const ProductHomeNome = styled.Text`
  font-family: 'Chakra-Regular';
  font-size: 15px;
  font-weight: 500;
  align-self: center;
  color: ${global.colors.white};
`;

export const ProductHomePreco = styled.Text `
  font-family: 'Chakra-Regular';
  font-size: 14px;
  font-weight: 500;
  align-self: center;
  color: ${global.colors.gray};
`;