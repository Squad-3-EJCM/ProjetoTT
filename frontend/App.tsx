import {useFonts} from 'expo-font';
import { Text } from 'react-native';

import Cadastro from './src/pages/Cadastro';
import Carrinho from './src/pages/Carrinho';
import Compras from './src/pages/Compras';
import ConfirmarEmail from './src/pages/ConfirmarEmail';
import EmailConfirmado from './src/pages/EmailConfirmado';
import Favoritos from './src/pages/Favoritos';
import Home from './src/pages/Home';
import Login from './src/pages/Login';
import NewPost from './src/pages/NewPost';
import Perfil from './src/pages/Perfil';
import Posts from './src/pages/Posts';

export default function App() {
  const [fontsLoaded] = useFonts({
    'Chakra-Medium': require("./src/fonts/Chakra-Petch/ChakraPetch-Medium.ttf"),
    'Chakra-Regular': require("./src/fonts/Chakra-Petch/ChakraPetch-Regular.ttf")
  });
  if(!fontsLoaded) return (<Text>Erro ao carregar as fontes</Text>)
  console.log(fontsLoaded);


  return (
    <Compras/>
  );
}