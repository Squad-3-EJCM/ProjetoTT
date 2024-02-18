
import React from 'react';
import { View, Image, Text } from 'react-native/types';
import {styles} from './style';

type Info = {
    Price: string;
    Name: string;
    GameUrl: string;
};

export default function TopHome({GameUrl, Name, Price}: Info) {
    return(
        <View style={styles.container}>
            <Image source={require(GameUrl)} style={styles.jogo}/>
            <Text style={styles.nome}>{Name}</Text>
            <Text style={styles.preco}>{Price}</Text>
        </View>
    );
};