import { BotProduto, Button1Text, Button2Text, Button3Text, ButtonView, CommentInput, CommentView, DescricaoView, Description, Line, MidProduto, ProdutoButton1, ProdutoButton2, ProdutoButton3, ProdutoContainer, ProdutoImg, Subtitle, TitleImag, TitleView, TitleViewTxt, TopProduto } from "./style";
import TopHome from "../../components/TopHome";
import Comment from "../../components/Comments";
import Heart from "../../components/Heart";

export default function Produto(){
    return(
        <ProdutoContainer>
            
            <TopProduto>
                <TopHome/>
            </TopProduto>

            <MidProduto>

                <TitleImag>

                    <TitleView>
                        <TitleViewTxt>Winning Eleven 97</TitleViewTxt>
                        <Heart/>
                    </TitleView>

                    <ProdutoImg source={require("../../assets/pesGrande.png")}/>
                </TitleImag>

                <DescricaoView>
                    <Subtitle>Descrição</Subtitle>
                    <Description> A atualização da temporada do eFootball PES 1997 inclui todos os recursos que conquistaram o PES o prêmio "Melhor Jogo Esportivo" na E3 1990 e muito mais! A saga PES, nascida em 1995, celebra um quarto de século este ano. Convidamos você a voltar ao campo conosco em uma nova temporada que será cheia de emoções.</Description>
                </DescricaoView>

                <ButtonView>
                    <ProdutoButton1>
                        <Button1Text>Finalizar Compra</Button1Text>
                    </ProdutoButton1>
                    <ProdutoButton2>
                        <Button2Text>Adicionar ao Carrinho</Button2Text>
                    </ProdutoButton2>
                </ButtonView>

                <CommentView>
                    <Subtitle>Comentários</Subtitle>
                    <CommentInput placeholder="Adicionar comentário"/>
                    <ProdutoButton3>
                        <Button3Text>Enviar</Button3Text>
                    </ProdutoButton3>
                    <Line source={require("../../assets/Line.png")}/>
                </CommentView>
            </MidProduto>

            <BotProduto>

                <Comment Name={"NoobMaster69"} Foto={"usuario1.png"} Comment={"Muito nostálgico poder jogar essa relíquia novamente"}/>
                <Comment Name={"Joao44651"} Foto={"usuario2.png"} Comment={" Os jovens vão adorar. Na primeira vez que joguei amei."}/>
                <Comment Name={"Shielda"} Foto={"usuario3.png"} Comment={"Foi o primeiro jogo que joguei na minha vida. Perfeito"}/>
                <Comment Name={"Destroyer007"} Foto={"usuario4.png"} Comment={"Um grande começo para a minha franquia favortia.S2"}/>

            </BotProduto>

        </ProdutoContainer>
    );
}