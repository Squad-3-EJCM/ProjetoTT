import TopHome from "../../components/TopHome";
import { AuxText, AuxView, BotNewPost, MidNewPost, NewPostContainer, NewPostInput1, NewPostInput2, NewPostInput3, NewPostSubtitle, NewPostTitle, NewPostUpload, NewPostUploadImg, NewPostView1, NewPostView2, NewPostView3, NewPostView4, PostButton, PostButtonText, TopNewPost } from "./style";
import {useForm, Controller} from 'react-hook-form';
import { useState } from "react";
import * as imageSelect from 'expo-image-picker';
import { TurboModuleRegistry } from "react-native";

interface PostData{
    Nome: string;
    Preco: string;
    Descricao: string;
}

export default function NewPost(){

    const [img, setImg] = useState('');
    const selectImg = async () => {
        const imagem = await imageSelect.launchImageLibraryAsync({
            mediaTypes: imageSelect.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 4],
            quality: 1,
        });
    
        console.log(imagem);
    
        if (!imagem.canceled) setImg(imagem.assets[0].uri);

        return imagem;
    };


    const {control, handleSubmit} = useForm<PostData>();
    const onSubmit = (data: PostData) => {
        console.log(data)
    }

    return(
        <NewPostContainer>

            <TopNewPost>
                <TopHome/>
            </TopNewPost>

            <MidNewPost>

                <NewPostView1>
                    <NewPostTitle>Nome do Produto</NewPostTitle>
                    <Controller
                    control={control}
                    name = 'Nome'
                    render = {({field: {onBlur, onChange, value}}) => (
                        <NewPostInput1 
                        onBlur={onBlur}
                        onChangeText={(value) => onChange(value)}
                        value = {value}
                        placeholder='digite aqui...' 
                        />
                    )}
                    rules={{
                        required: 'o Nome é obrigatório',
                        maxLength: 90,
                    }}
                    defaultValue=''
                    />  
                    
                </NewPostView1>

                <NewPostView2>
                    <NewPostTitle>Imagem do Produto</NewPostTitle>
                    <NewPostUpload onPress={selectImg}>
                        {img? <NewPostUploadImg style={{width:300 , height:200 }} source={{uri: img}}/>:<NewPostUploadImg source={require("../../assets/upload.png")}/>}
                    
                    </NewPostUpload>
                </NewPostView2>

                <NewPostView3>
                    <NewPostSubtitle>Valor em reais:</NewPostSubtitle>
                    <AuxView>
                        <AuxText>R$</AuxText>
                        <Controller
                        control={control}
                        name = 'Preco'
                        render = {({field: {onBlur, onChange, value}}) => (
                            <NewPostInput2 
                            onBlur={onBlur}
                            onChangeText={(value) => onChange(value)}
                            value = {value} 
                            />
                        )}
                        rules={{
                            required: 'o Preco é obrigatório',
                            maxLength: 30,
                        }}
                        defaultValue=''
                        /> 
                    </AuxView>
                </NewPostView3>

                <NewPostView4>
                    <NewPostSubtitle>Descrição do Produto</NewPostSubtitle>
                    <Controller
                    control={control}
                    name = 'Descricao'
                    render = {({field: {onBlur, onChange, value}}) => (
                        <NewPostInput3
                        onBlur={onBlur}
                        onChangeText={(value) => onChange(value)}
                        value = {value}
                        placeholder='digite aqui...' 
                        />
                    )}
                    rules={{
                        required: 'a Descricao é obrigatório',
                        maxLength: 180,
                    }}
                    defaultValue=''
                    /> 
                </NewPostView4>

            </MidNewPost>

            <BotNewPost>
                <PostButton onPress={handleSubmit(onSubmit)}>
                    <PostButtonText>Publicar</PostButtonText>
                </PostButton>
            </BotNewPost>

        </NewPostContainer>
    ); 
}