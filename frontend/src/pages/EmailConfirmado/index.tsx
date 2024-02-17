import { StatusBar } from 'expo-status-bar';
import {Image, Text, View, TextInput, Pressable} from 'react-native';
import {styles} from './style';

export default function EmailConfirmado(){
    return(
        <View style={styles.container}>
            <Image source={require("../../assets/Logo.png")} style={styles.logo}/>
            <View style={styles.container2}>
                <Text style={styles.title}>Email confirmado</Text>
                <Text style={styles.mensage}>Parabéns! Email verificado com sucesso. Aperte no botão abaixo para voltar à tela de login</Text>
            </View>

            
            <Pressable style={styles.botao2}><Text style={styles.botaoTexto2}>Email confirmado</Text></Pressable>
            
        </View>
    );
}