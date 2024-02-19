import React from "react";
import { BotaoTexto2, Container, Container2, Logo, Title, Message, Botao2 } from "./style";

export default function ConfirmarEmail(){
    return(
        <Container>
            <Logo source={require("../../assets/Logo.png")}/>

            <Container2>
                <Title>Verifique seu E-mail</Title>
                <Message>Para continuar, confirme seu email apertando no botão abaixo</Message>
            </Container2>

            <Botao2><BotaoTexto2>Confirme seu Email</BotaoTexto2></Botao2>
        </Container>
    );
}