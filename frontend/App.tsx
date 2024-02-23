import {useFonts} from 'expo-font';
import { Text } from 'react-native';
import { ModProvider } from './src/context/moderatorContext';
import Router from './src/routes/router';

export default function App() {
  const [fontsLoaded] = useFonts({
    'Chakra-Medium': require("./src/fonts/Chakra-Petch/ChakraPetch-Medium.ttf"),
    'Chakra-Regular': require("./src/fonts/Chakra-Petch/ChakraPetch-Regular.ttf")
  });
  if(!fontsLoaded) return (<Text>Erro ao carregar as fontes</Text>)
  console.log(fontsLoaded);


  return (

    <ModProvider><Router/></ModProvider>
    
  );
}