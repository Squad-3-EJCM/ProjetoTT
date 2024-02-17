
import React from 'react';
import { View, Image, Text } from 'react-native';
import {styles} from './style';

type Info = {
    Price: string;
    Name: string;
    GameUrl: string;
};



const ProdutHome = ({GameUrl, Name, Price}: Info) =>{
    return(
        <View style={styles.container}>
            <Image source={require("../../assets/" + GameUrl)} style={styles.jogo}/>
            <Text style={styles.nome}>{Name}</Text>
            <Text style={styles.preco}>R${Price}</Text>
        </View>
    );
};


export default ProdutHome;