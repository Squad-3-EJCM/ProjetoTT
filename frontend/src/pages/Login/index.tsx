import { Botao2, BotaoTexto2, Container, Container2, Email, Input, Logo, Senha } from '../Cadastro/style';
import { Botao, BotaoTexto, TextoVisitante } from './style';
import { Pressable } from 'react-native';

export default function Login() {
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

      <Botao>
        <BotaoTexto>Login</BotaoTexto>
      </Botao>

      <Botao2>
        <BotaoTexto2>Cadastrar-se</BotaoTexto2>
      </Botao2>

      <Pressable>
        <TextoVisitante>Entrar como visitante</TextoVisitante>
      </Pressable>
    </Container>
  );
}
