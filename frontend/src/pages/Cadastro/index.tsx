import { Botao2, BotaoTexto2, Container, Container2, Email, Input, Logo, Senha } from './style';
import {useFonts} from 'expo-font'
import CheckBox from '../../components/Checkbox';

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

        <CheckBox/>
  
        <Botao2>
          <BotaoTexto2>Cadastrar-se</BotaoTexto2>
        </Botao2>
      </Container>
    );
}
