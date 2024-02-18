import { useState } from "react";
import { Pressable } from "react-native";
import { CheckImage, Checked } from "./style";

export default function CheckBox(){
    const [checked, Check] = useState<boolean>(false);

    return(
        <Pressable onPress={() => {
            if(checked) Check(false);
            else Check(true);
        }}>
            {
                checked ?
                <CheckImage source={require('../../assets/check2.png')}/>
                :
                <Checked source={require('../../assets/check.png')}/>
            }
        </Pressable>
    );
}