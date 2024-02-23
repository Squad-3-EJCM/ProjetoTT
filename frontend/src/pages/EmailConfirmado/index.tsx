import { BotaoTexto2, Container, Container2, Logo, Title, Message, Botao2 } from "../ConfirmarEmail/style";
import { useNavigation } from "@react-navigation/native";

export default function EmailConfirmado(){
    const navigation = useNavigation();
    return(
        <Container>
            <Logo source={require("../../assets/Logo.png")}/>
            <Container2>
                <Title>Email confirmado</Title>
                <Message>Parabéns! Email verificado com sucesso. Aperte no botão abaixo para voltar à tela de login</Message>
            </Container2>

            
            <Botao2 onPress={()=>navigation.navigate('Login' as never)}><BotaoTexto2>Email confirmado</BotaoTexto2></Botao2>
            
        </Container>
    );
}