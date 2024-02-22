import styled from "styled-components/native";
import { global } from "../../globalStyle";

export const NewPostContainer = styled.View`
    flex: 1;
    display: flex;
    flex-direction: column;
    background-color: ${global.colors.black};
    gap: 36px;
` ;

export const TopNewPost = styled.View`

`;

export const MidNewPost = styled.View`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 15px;
`;

export const BotNewPost = styled.View`
    align-items: center;
    justify-content: center;
`;

export const NewPostView1 = styled.View`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 5px;
`;

export const NewPostView2 = styled.View`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 5px;
`;

export const NewPostView3 = styled.View`
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;
    gap: 20px;
`;

export const NewPostView4 = styled.View`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 5px;
`;

export const NewPostInput1 = styled.TextInput`
    width: 312px;
    height: 49px;
    border-radius: 20px;
    background-color: ${global.colors.purple};
    padding-left: 10px;
    color: #ffffff66;
`;

export const NewPostInput2 = styled.TextInput`
    width: 70%;
`;

export const NewPostInput3 = styled.TextInput`
    width: 312px;
    height: 167px;
    background-color: ${global.colors.purple};
    border-radius: 20px;
    padding-left: 10px;
    color: #ffffff66;
`;

export const NewPostTitle = styled.Text`
    font-family: 'Chakra-medium';
    font-size: 32px;
    color: ${global.colors.gray};
`;

export const NewPostSubtitle = styled.Text`
    font-family: 'Chakra-medium';
    font-size: 24px;
    color: ${global.colors.gray};
`;

export const NewPostUpload = styled.Pressable`
    width: 312px;
    height: 217px;
    border-radius: 20px;
    background-color: ${global.colors.green};
    justify-content: center;
    align-items: center;
`;

export const NewPostUploadImg = styled.Image`
    width: 96px;
    height: 96px;
`;

export const AuxView = styled.View`
    width: 113px;
    height: 46px;
    display: flex;
    flex-direction: row;
    border-radius: 20px;
    background-color: ${global.colors.purple};
    align-items: center;
    gap: 10px;

`;

export const AuxText = styled.Text`
    font-family: 'Chakra-medium';
    font-size: 16px;
    color: ${global.colors.gray};
`;

export const PostButton = styled.Pressable`
    width: 180px;
    height: 47px;
    border-radius: 20px;
    align-items: center;
    justify-content: center;
    background-color: ${global.colors.green};
`;

export const PostButtonText = styled.Text`
    font-family: 'Chakra-medium';
    font-size: 24px;
    color: ${global.colors.black};
`;
