import { StyleSheet} from 'react-native';
import styled from 'styled-components/native';

export const TopHome = styled.View `
`;

export const styles = StyleSheet.create({
    container:{
        display: 'flex',
        flexDirection: 'column',
        justifyContent:'center',
        alignItems: 'center',
        width: 115,
        height: 143,
        borderRadius: 5,
        backgroundColor: '#7122EE',
    },

    jogo:{
        width:80,
        height: 90,
        borderColor: '#0E0D0E',
    },

    nome:{
        fontFamily: 'Chakra Petch',
        fontSize: 15,
        fontWeight: '500',
        alignSelf: 'center',
        color: '#F1F1E6',
    },

    preco:{
        fontFamily: 'Chakra Petch',
        fontSize: 14,
        fontWeight: '500',
        alignSelf: 'center',
        color: '#F1F1E6',
    }
})