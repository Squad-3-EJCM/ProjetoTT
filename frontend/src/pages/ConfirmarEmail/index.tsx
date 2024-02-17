import { StatusBar } from 'expo-status-bar';
import {Image, Text, View, TextInput, Pressable} from 'react-native';
import {styles} from './style';

export default function ConfirmarEmail(){
    return(
        <View style={styles.container}>
            <Image source={require("../../assets/Logo.png")} style={styles.logo}/>
            <View style={styles.container2}>
                <Text style={styles.title}>Verifique seu E-mail</Text>
                <Text style={styles.mensage}>Para continuar, confirme seu email apertando no botão abaixo</Text>
            </View>

            
            <Pressable style={styles.botao2}><Text style={styles.botaoTexto2}>Confirme seu Email</Text></Pressable>
            
        </View>
    );
}