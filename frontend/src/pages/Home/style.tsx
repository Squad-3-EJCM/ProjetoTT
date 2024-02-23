import { FlatList } from 'react-native';
import styled from 'styled-components/native';
import { global } from '../../globalStyle';

export const ContainerHome = styled.ScrollView`
    display: flex;
    flex: 1;
    flex-direction: column;
    background-color: ${global.colors.black};
`;
 
export const TopPage = styled.View`
    margin-bottom: 20px;
    z-index: 2;
`;

export const MidPage = styled.View`
    display: flex;
    flex-direction: column;
    gap: 30px;
    margin-bottom: 30px;
    align-items: center;
`;

export const BottomPage = styled.View`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-bottom: 20px;
`;

export const Products = styled.View`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-left: 23px;
    margin-right: 23px;
`;

export const BottomText= styled.Text`
    font-family: 'Chakra-Medium';
    font-size: 14px;
    color: ${global.colors.gray};
`;

export const LogoMenor = styled.Image`
    width: 185px;
    height: 76px;
    
`;

export const GameList = (styled.FlatList`
    width: 370px;
    z-index: -2;
` as unknown) as typeof FlatList;