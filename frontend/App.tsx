import {useFonts} from 'expo-font';
import { SafeAreaView, Text } from 'react-native';

import Cadastro from './src/pages/Cadastro';
import ConfirmarEmail from './src/pages/ConfirmarEmail';
import EmailConfirmado from './src/pages/EmailConfirmado';
import Home from './src/pages/Home';
import Login from './src/pages/Login';
import { StatusBar } from 'react-native';

export default function App() {
  const [fontsLoaded] = useFonts({
    'Chakra-Medium': require("./src/fonts/Chakra-Petch/ChakraPetch-Medium.ttf"),
    'Chakra-Regular': require("./src/fonts/Chakra-Petch/ChakraPetch-Regular.ttf")
  });
  if(!fontsLoaded) return (<Text>Erro ao carregar as fontes</Text>)
  console.log(fontsLoaded);


  return (
    <>
      <StatusBar/>
      <Cadastro/>
    </>
  );
}