import { StatusBar } from 'expo-status-bar';
import {Image, Text, View, TextInput, Pressable} from 'react-native';
import {styles} from './style';
import ProdutHome from "../../components/ProdutHome";


export default function Home(){
    return(
        <View style={styles.allPage}>
            <View style={styles.topPage}>
                <Image source={require("../../assets/Menu.png")} style={styles.menu}/>
                <View style={styles.search}>
                    <TextInput placeholder='Pesquisar' style={styles.input}></TextInput>
                    <Image source={require("../../assets/Vector.png")} style={styles.lupa}/>
                </View>
                <Image source={require("../../assets/Foto de perfil.png")} style={styles.perfil}/>
            </View>

            <View style={styles.midPage}>
                <ProdutHome GameUrl={"gta.jpg"} Name={"GTA I"} Price={"50,00"}/>
            </View>

            <View style={styles.bottomPage}>

            </View>


        </View>
    );
}