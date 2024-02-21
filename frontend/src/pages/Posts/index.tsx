import TopHome from "../../components/TopHome";
import { MidPosts, NewPost, NewPostImg, NewPostText, PostsConatiner, PostView, PostViewBot, PostViewBotImg, PostViewImg, PostViewName, PostViewNamePrice, PostViewNotes, PostViewPrice, PostViewTop, TopPosts } from "./style";

export default function Posts(){
    return(
        <PostsConatiner>
            <TopPosts>
                <TopHome/>
            </TopPosts>

            <MidPosts>

                <NewPost>
                    <NewPostImg source={require("../../assets/plus-line.png")}/>
                    <NewPostText>Nova Publicação</NewPostText>
                </NewPost>

                <PostView>

                    <PostViewTop>
                        <PostViewImg source={require("../../assets/gta.jpg")}/>
                        <PostViewNamePrice>
                            <PostViewName>GTA I</PostViewName>
                            <PostViewPrice>R$ 50,00</PostViewPrice>
                        </PostViewNamePrice>
                    </PostViewTop>

                    <PostViewNotes>Publicado em 25/01/24</PostViewNotes>
                    <PostViewNotes>Ultima atualização em 02/02/24</PostViewNotes>

                    <PostViewBot>
                        <PostViewBotImg source={require("../../assets/eye.png")}/>
                        <PostViewNotes>1.3k</PostViewNotes>
                    </PostViewBot>

                </PostView>

                <PostView>

                    <PostViewTop>
                        <PostViewImg source={require("../../assets/black.jpg")}/>
                        <PostViewNamePrice>
                            <PostViewName>Black</PostViewName>
                            <PostViewPrice>R$ 30,00</PostViewPrice>
                        </PostViewNamePrice>
                    </PostViewTop>

                    <PostViewNotes>Publicado em 29/01/24</PostViewNotes>
                    <PostViewNotes>Ultima atualização em 01/02/24</PostViewNotes>

                    <PostViewBot>
                        <PostViewBotImg source={require("../../assets/eye.png")}/>
                        <PostViewNotes>1.1k</PostViewNotes>
                    </PostViewBot>

                </PostView>

            </MidPosts>



        </PostsConatiner>
    );
}