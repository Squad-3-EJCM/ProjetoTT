import styled from 'styled-components/native';

export const ContainerTopHome = styled.View `
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 100%;
`;

export const Menu = styled.Image`
    width: 24px;
    height: 24px;
`;

export const Search = styled.View`
    display: flex;
    flex-direction: row;
    align-items: center;
    border-radius: 20px;
    background-color: #DEFA63;
`;

export const Pesquisa = styled.TextInput`
    width:235px;
    height: 35px;
    border-radius: 20px;
    margin-left: 10px;
`;

export const Lupa = styled.Image`
    width:24px;
    height:25px;
    margin-right: 10px;   
`;

export const FotodePerfil = styled.Image`
    width: 60px;
    height: 60px;
    align-self: flex-end;
`;

