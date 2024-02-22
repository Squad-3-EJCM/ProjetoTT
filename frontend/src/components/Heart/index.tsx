import { useState } from "react";
import { Pressable } from "react-native";
import { HeartImage, Liked } from "./style";

export default function Heart(){
    const [favorited, Like] = useState<boolean>(false);

    return(
        <Pressable onPress={() => {
            if(favorited) Like(false);
            else Like(true);
        }}>
            {
                favorited ?
                <HeartImage source={require('../../assets/heart1.png')}/>
                :
                <Liked source={require('../../assets/heart2.png')}/>
            }
        </Pressable>
    );
}