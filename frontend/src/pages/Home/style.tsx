import { StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
    allPage:{
        flex: 1,
        display: `flex`,
        flexDirection: `column`,
        backgroundColor:`#0E0D0E`,

    },

    topPage:{
        display:`flex`,
        flexDirection: `row`,
        justifyContent: `space-between`,
        alignItems:`center`,

    },

    midPage:{

    },

    bottomPage:{

    },

    search:{
        display: `flex`,
        flexDirection: `row`,
        alignItems: `center`,
        borderRadius: 20,
        backgroundColor: `#DEFA63`,
    },

    input:{
        width:235,
        height: 35,
        borderRadius: 20,
        marginLeft: 10
    },

    lupa:{
        width:24,
        height:25,
        marginRight: 10,
    },

    perfil:{
        width: 60,
        height: 60,
        alignSelf: `flex-end`,
    },

    menu:{
        width: 24,
        height: 24,
    },
})