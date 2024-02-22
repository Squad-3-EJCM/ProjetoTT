import { CommentContainer, Comments, CommentTopView, ModFix, UserFoto, UserName, UserView } from "./style";
import { ModContext } from "../../context/moderatorContext";
import { useContext } from "react";
interface UserData {
    Name: string;
    Foto: string;
    Comment: string;
}

export default function Comment({Name, Foto, Comment} : UserData){
    const {isMod} = useContext(ModContext);
    return(
        <CommentContainer>

            <CommentTopView>
                <UserView>
                    <UserFoto source={require("../../assets/" + Foto)}/>
                    <UserName>{Name}</UserName>
                </UserView>
                <ModFix source={require("../../assets/minus.png")} style={{display: `${isMod? 'flex':'none'}`}}/>
            </CommentTopView>

            <Comments>{Comment}</Comments>
 
        </CommentContainer>
    );
}