import { BotMenu, IconStart, MenuAllContainer, MenuBotText, MenuButton, MenuConatiner, MenuIcon, MenuLogo, MenuTxt, MidMenu, TopMenu } from "./style";
import { Animated, Pressable, View } from "react-native";
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";


export default function Menu(){
    const navigation = useNavigation();
    const [open, setOpen] = useState(false);
    const [tamanho] = useState(new Animated.Value(-205));

    const OpenOrClose = (option?: number) => {

        if(open) {
            Animated.timing(
                tamanho, {
                    toValue: -205,
                    duration: 500, useNativeDriver:true
                }
            ).start(() => {setOpen(false)});
  
        }
        else {
            Animated.timing(
                tamanho, {
                    toValue: 0,
                    duration: 500, useNativeDriver:true
                }
            ).start();
     
            setOpen(true);

        }
    }

    const largura = tamanho.interpolate({
        inputRange: [-205, 0],
        outputRange: ['-205px', '0px']
    });


    return(
        <>
            <Pressable onPress={() => OpenOrClose()}><IconStart source={require('../../assets/Menu.png')} /></Pressable>
            <MenuAllContainer onPress={() => OpenOrClose()} style={{display: `${open? 'flex': 'none'}`}}>
                
                <MenuConatiner style={{left: largura}}>
                    <TopMenu>
                        <MenuLogo source={require("../../assets/LogoMenu.png")}/>
                    </TopMenu>

                    <MidMenu>

                        <MenuButton onPress={()=>navigation.navigate('Home' as never)}>
                            <MenuIcon source={require('../../assets/pixel_home.png')}/>
                            <MenuTxt>Home</MenuTxt>
                        </MenuButton>

                        <MenuButton onPress={()=>navigation.navigate('Carrinho' as never)}>
                            <MenuIcon source={require('../../assets/pixel_cart.png')}/>
                            <MenuTxt>Carrinho</MenuTxt>
                        </MenuButton>

                        <MenuButton onPress={()=>navigation.navigate('Favoritos' as never)}>
                            <MenuIcon source={require('../../assets/tabler_heart.png')}/>
                            <MenuTxt>Favoritos</MenuTxt>
                        </MenuButton>

                        <MenuButton onPress={()=>navigation.navigate('Compras' as never)}>
                            <MenuIcon source={require('../../assets/pixelarticons_gift.png')}/>
                            <MenuTxt>Meus Pedidos</MenuTxt>
                        </MenuButton>

                        <MenuButton onPress={()=>navigation.navigate('Post' as never)}>
                            <MenuIcon source={require('../../assets/pixel_gamepad.png')}/>
                            <MenuTxt>Meus Produtos</MenuTxt>
                        </MenuButton>
                    </MidMenu>

                    <BotMenu>
                        <MenuBotText>Fale conosco</MenuBotText>
                        <MenuBotText>Termos de uso</MenuBotText>
                        <MenuBotText>Politicas de privacidade</MenuBotText>
                    </BotMenu>

                </MenuConatiner>
            </MenuAllContainer>
        </>
    );
}