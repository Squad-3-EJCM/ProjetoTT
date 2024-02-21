import TopHome from "../../components/TopHome";
import { AuxText, AuxView, BotNewPost, MidNewPost, NewPostContainer, NewPostInput1, NewPostInput2, NewPostInput3, NewPostSubtitle, NewPostTitle, NewPostUpload, NewPostUploadImg, NewPostView1, NewPostView2, NewPostView3, NewPostView4, PostButton, PostButtonText, TopNewPost } from "./style";
import {useForm, Controller} from 'react-hook-form';

interface PostData{
    Nome: string;
    Img: string;
    Descricao: string;
}

export default function NewPost(){
    return(
        <NewPostContainer>

            <TopNewPost>
                <TopHome/>
            </TopNewPost>

            <MidNewPost>

                <NewPostView1>
                    <NewPostTitle>Nome do Produto</NewPostTitle>
                    <NewPostInput1 placeholder="digite aqui..."/>
                </NewPostView1>

                <NewPostView2>
                    <NewPostTitle>Imagem do Produto</NewPostTitle>
                    <NewPostUpload>
                        <NewPostUploadImg source={require("../../assets/upload.png")}/>
                    </NewPostUpload>
                </NewPostView2>

                <NewPostView3>
                    <NewPostSubtitle>Valor em reais:</NewPostSubtitle>
                    <AuxView>
                        <AuxText>R$</AuxText>
                        <NewPostInput2/>
                    </AuxView>
                </NewPostView3>

                <NewPostView4>
                    <NewPostSubtitle>Descrição do Produto</NewPostSubtitle>
                    <NewPostInput3 placeholder="digite aqui..."/>
                </NewPostView4>

            </MidNewPost>

            <BotNewPost>
                <PostButton>
                    <PostButtonText>Publicar</PostButtonText>
                </PostButton>
            </BotNewPost>

        </NewPostContainer>
    );
}