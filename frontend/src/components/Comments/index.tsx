import { CommentContainer, Comments, CommentTopView, UserFoto, UserName } from "./style";

interface UserData {
    Name: string;
    Foto: string;
    Comment: string;
}

export default function Comment({Name, Foto, Comment} : UserData){
    return(
        <CommentContainer>

            <CommentTopView>
                <UserFoto source={require("../../assets/" + Foto)}/>
                <UserName>{Name}</UserName>
            </CommentTopView>

            <Comments>{Comment}</Comments>

        </CommentContainer>
    );
}