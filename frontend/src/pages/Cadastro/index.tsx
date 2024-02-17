import { StatusBar } from 'expo-status-bar';
import {Image, Text, View, TextInput, Pressable} from 'react-native';
import { Botao2, BotaoTexto2, Container, Container2, Email, Input, Logo, Senha } from './style';

export default function Cadastro() {
    return (
      <Container>
        <Logo source={require("../../assets/Logo.png")}/>

        <Container2>
          <Email source={require("../../assets/email.png")}/>
          <Input placeholder='E-mail'/>
        </Container2>

        <Container2>
          <Senha source={require("../../assets/cadeado.png")}/>
          <Input placeholder='Senha'/>
        </Container2>

        <Container2>
          <Senha source={require("../../assets/cadeado.png")}/>
          <Input placeholder='Confirmar Senha'/>
        </Container2>
  
        <Botao2><BotaoTexto2>Cadastrar-se</BotaoTexto2></Botao2>
      </Container>
    );
}
