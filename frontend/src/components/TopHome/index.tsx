
import Menu from '../Menu';
import {ContainerTopHome, FotodePerfil, Lupa, Pesquisa, Search} from './style';

export default function TopHome() {
    return(
        <ContainerTopHome>
            <Menu/>
            <Search>
                <Pesquisa placeholder='Pesquisar'></Pesquisa>
                <Lupa source={require("../../assets/Vector.png")}/>
            </Search>
            <FotodePerfil source={require("../../assets/Foto de perfil.png")}/>
        </ContainerTopHome>
    );
};