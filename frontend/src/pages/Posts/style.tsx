import styled from "styled-components/native";
import { global } from "../../globalStyle";

export const PostsConatiner = styled.View`
    flex: 1;
    display: flex;
    flex-direction: column;
    background-color: ${global.colors.black};
    gap: 130px;
`;

export const TopPosts = styled.View`
    z-index: 2;
`;

export const MidPosts = styled.View`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 20px;
`;

export const NewPost = styled.Pressable`
    width: 312px;
    height: 48px;
    display: flex;
    flex-direction: row;
    border-radius: 15px;
    align-items: center;
    background-color: ${global.colors.green};
    gap: 10px;
`;

export const NewPostImg = styled.Image`
    width: 36px;
    height: 36px;
`;

export const NewPostText = styled.Text`
    font-family: 'Chakra-medium';
    font-size: 24px;
    color: ${global.colors.black};
`;

export const PostView = styled.View`
    width: 312px;
    height: 213px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    border-radius: 10px;
    background-color: ${global.colors.purple};
    gap: 10px;
`;

export const PostViewTop = styled.View`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 60px;
    margin-left: 15px;
    margin-top: 15px;
    
`;

export const PostViewBot = styled.View`
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-left: 15px;
`;

export const PostViewImg = styled.Image`
    width: 100px;
    height: 100px;
    border: solid ${global.colors.black};
`;

export const PostViewNamePrice = styled.View`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 20px;
`;

export const PostViewName = styled.Text`
    font-family: 'Chakra-medium';
    font-size: 24px;
    color: ${global.colors.white};
`;

export const PostViewPrice = styled.Text`
    font-family: 'Chakra-medium';
    font-size: 20px;
    color: ${global.colors.white};
`;

export const PostViewNotes = styled.Text`
    margin-left: 15px;
    font-family: 'Chakra-medium';
    font-size: 15px;
    color: ${global.colors.white};
`;

export const PostViewBotImg = styled.Image`
    width: 24px;
    height: 24px;
`;