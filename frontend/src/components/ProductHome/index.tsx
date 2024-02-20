
import { ProductHomeContainer ,ProductHomeJogo, ProductHomeNome, ProductHomePreco } from './style';

export type Info = {
    Price: string;
    Name: string;
    GameUrl: string;
};

export default function ProductHome({GameUrl, Name, Price}: Info){
    return(
        <ProductHomeContainer>
            <ProductHomeJogo source={require(`../../assets/gta.jpg`)}/>
            <ProductHomeNome>{Name}</ProductHomeNome>
            <ProductHomePreco>R${Price}</ProductHomePreco>
        </ProductHomeContainer>
    );
};
