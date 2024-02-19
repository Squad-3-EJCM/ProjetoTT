
import {ContainerTopHome, FotodePerfil, Lupa, Menu, Pesquisa, Search} from './style';

export default function TopHome() {
    return(
        <ContainerTopHome>
            <Menu source={require("../../assets/Menu.png")}/>
            <Search>
                <Pesquisa placeholder='Pesquisar'></Pesquisa>
                <Lupa source={require("../../assets/Vector.png")}/>
            </Search>
            <FotodePerfil source={require("../../assets/Foto de perfil.png")}/>
        </ContainerTopHome>
    );
};