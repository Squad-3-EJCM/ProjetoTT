import React from "react";
import { BotaoPerfil1, BotaoPerfil2, ButtonImage, FotoPerfil, InnerButton, Menu, MidPerfil, Name, PerfilContainer, TextButton, TextButton2, TextButton3, TopPerfil } from "./style";

export default function Perfil(){
    return(
        <PerfilContainer>
            <TopPerfil>
                <Menu source={require('../../assets/Menu.png')}/>
            </TopPerfil>

            <MidPerfil>
                <FotoPerfil source={require('../../assets/Foto de perfil grande.png')}/>

                <Name>Leonardo de Barros Fernandes</Name>

                <BotaoPerfil1>
                    <TextButton>E-mail</TextButton>
                    <InnerButton>
                        <TextButton2>leonardobf@dcc.ufrj.br</TextButton2>
                        <ButtonImage source={require('../../assets/maiorBranco.png')}/>
                    </InnerButton>
                </BotaoPerfil1>

                <BotaoPerfil1>
                    <TextButton>Senha</TextButton>
                    <InnerButton>
                        <TextButton2>*************</TextButton2>
                        <ButtonImage source={require('../../assets/maiorBranco.png')}/>
                    </InnerButton>
                </BotaoPerfil1>

                <BotaoPerfil1>
                    <TextButton>Cartões</TextButton>
                    <InnerButton>
                        <TextButton2>MasterCard *****9999</TextButton2>
                        <ButtonImage source={require('../../assets/maiorBranco.png')}/>
                    </InnerButton>
                </BotaoPerfil1>

                <BotaoPerfil1>
                    <TextButton>Endereço</TextButton>
                    <InnerButton>
                        <TextButton2>Rua Sobral, 79 RJ</TextButton2>
                        <ButtonImage source={require('../../assets/maiorBranco.png')}/>
                    </InnerButton>
                </BotaoPerfil1>

                <BotaoPerfil2>
                    <TextButton3>Minhas Postagens</TextButton3>
                    <ButtonImage source={require('../../assets/maiorPreto.png')}/>
                </BotaoPerfil2>

            </MidPerfil>







        </PerfilContainer>
    );
}