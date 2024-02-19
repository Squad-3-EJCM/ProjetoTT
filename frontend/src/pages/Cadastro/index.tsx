import { Botao2, BotaoTexto2, CheckboxText, ContainerCadastro, ContainerCadastro2, ContainerCadastro3, Email, Input, Logo, Senha } from './style';
import {useFonts} from 'expo-font'
import CheckBox from '../../components/Checkbox';
import React from 'react';

export default function Cadastro() {
    return (
      <ContainerCadastro>
        
        <Logo source={require("../../assets/Logo.png")}/>

        <ContainerCadastro2>
          <Email source={require("../../assets/email.png")}/>
          <Input placeholder='E-mail'/>
        </ContainerCadastro2>

        <ContainerCadastro2>
          <Senha source={require("../../assets/cadeado.png")}/>
          <Input placeholder='Senha'/>
        </ContainerCadastro2>

        <ContainerCadastro2>
          <Senha source={require("../../assets/cadeado.png")}/>
          <Input placeholder='Confirmar Senha'/>
        </ContainerCadastro2>

        <ContainerCadastro3>
          <CheckBox/>
          <CheckboxText>Concordo com os termos e condições de uso</CheckboxText>
        </ContainerCadastro3>
        
  
        <Botao2>
          <BotaoTexto2>Finalizar Cadastro</BotaoTexto2>
        </Botao2>
      </ContainerCadastro>
    );
}
