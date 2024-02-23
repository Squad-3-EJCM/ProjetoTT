import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


import Cadastro from '../pages/Cadastro';
import Carrinho from '../pages/Carrinho';
import Compras from '../pages/Compras';
import ConfirmarEmail from '../pages/ConfirmarEmail';
import EmailConfirmado from '../pages/EmailConfirmado';
import Favoritos from '../pages/Favoritos';
import Home from '../pages/Home';
import Login from '../pages/Login';
import NewPost from '../pages/NewPost';
import Pay from '../pages/Pay';
import Perfil from '../pages/Perfil';
import Posts from '../pages/Posts';
import Produto from '../pages/Produto';


const Stack = createNativeStackNavigator();
export default function Router(){
    return(
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Login" component={Login} options={{headerShown:false}}/>
                <Stack.Screen name="Cadastro" component={Cadastro} options={{headerShown:false}}/>
                <Stack.Screen name="ConfirmarEmail" component={ConfirmarEmail} options={{headerShown:false}}/>
                <Stack.Screen name="EmailConfirmado" component={EmailConfirmado} options={{headerShown:false}}/>
                <Stack.Screen name="Home" component={Home} options={{headerShown:false}}/>
                <Stack.Screen name="Carrinho" component={Carrinho} options={{headerShown:false}}/>
                <Stack.Screen name="Compras" component={Compras} options={{headerShown:false}}/>
                <Stack.Screen name="Favoritos" component={Favoritos} options={{headerShown:false}}/>
                <Stack.Screen name="NewPost" component={NewPost} options={{headerShown:false}}/>
                <Stack.Screen name="Pay" component={Pay} options={{headerShown:false}}/>
                <Stack.Screen name="Perfil" component={Perfil} options={{headerShown:false}}/>
                <Stack.Screen name="Post" component={Posts} options={{headerShown:false}}/>
                <Stack.Screen name="Produto" component={Produto} options={{headerShown:false}}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
}