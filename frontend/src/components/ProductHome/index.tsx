
import { ProductHomeContainer ,ProductHomeJogo, ProductHomeNome, ProductHomePreco } from './style';
import { useNavigation } from "@react-navigation/native";

export type Info = {
    Price: string;
    Name: string;
    GameUrl: string;
    Rota: string;
};

export default function ProductHome({GameUrl, Name, Price, Rota}: Info){
    const navigation = useNavigation();
    return(
        <ProductHomeContainer onPress={()=>navigation.navigate('Produto' as never)}>
            <ProductHomeJogo source={require("../../assets/" + GameUrl)}/>
            <ProductHomeNome>{Name}</ProductHomeNome>
            <ProductHomePreco>R${Price}</ProductHomePreco>
        </ProductHomeContainer>
    );
};
