import { StatusBar } from 'expo-status-bar';
import {Image, Text, View, TextInput, Pressable} from 'react-native';
import {styles} from './style';

export default function Cadastro() {
  return (
    <View style={styles.container}>
        <Image source={require("../../assets/Logo.png")} style={styles.logo}/>
        <View style={styles.container2}>
            <Image source={require("../../assets/email.png")} style={styles.email}/>
            <TextInput placeholder='E-mail' style={styles.input}/>
        </View>
        <View style={styles.container2}>
            <Image source={require("../../assets/cadeado.png")} style={styles.senha}/>
            <TextInput placeholder='Senha' style={styles.input}/>
        </View>
        <View style={styles.container2}>
            <Image source={require("../../assets/cadeado.png")} style={styles.senha}/>
            <TextInput placeholder='Confirmar Senha' style={styles.input}/>
        </View>
      

        
        <Pressable style={styles.botao2}><Text style={styles.botaoTexto2}>Cadastrar-se</Text></Pressable>
        
    </View>
  );
}
