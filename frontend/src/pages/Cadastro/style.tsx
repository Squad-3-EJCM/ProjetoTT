import { StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#0E0D0E',
      alignItems: 'center',
      justifyContent: 'center',
    },
  
    logo:{
      width: 323,
      height: 110,
      marginBottom: 100,
    },
  
    container2:{
      display: 'flex',
      flexDirection:'row',
      alignItems: 'center',
      justifyContent:'center',
      gap: 5,
      marginBottom: 68,
      borderBottomWidth:1,
      borderBottomColor:'#ffffff78',
    },
  
    email:{
      width: 20,
      height: 20,
    },
  
    senha:{
      width: 16,
      height: 20,
    },
  
    input:{
      width: 260,
      height: 33,
      color: '#ffffff78',
      padding: 5,
      borderColor: '#0E0D0E',
    },
  
    botao:{
      backgroundColor: '#DEFA63',
      width: 276,
      height: 42,
      justifyContent: 'center',
      alignItems:'center',
      borderRadius: 15,
      marginBottom: 40,
    },
  
    botaoTexto:{
      color: '#0E0D0E',
      fontFamily: 'CHAKRA PETCH',
      fontSize: 18,
      fontStyle: 'normal',
    },
  
    botao2:{
      backgroundColor: '#7122EE',
      width: 204,
      height: 42,
      justifyContent: 'center',
      alignItems:'center',
      borderRadius: 15,
      marginBottom: 40,
    },
  
    botaoTexto2:{
      color: '#F1F1E6',
      fontFamily: 'CHAKRA PETCH',
      fontSize: 18,
      fontStyle: 'normal',
    },
  
    visitante:{
      
  
    },
  
    textoVisitante:{
      fontFamily:'Chakra Petch',
      fontSize: 16,
      color:'#F1F1E6',
    },

    container3:{

    },

    checkbox:{
        alignItems: 'center',
    },

    checkboxText:{
        fontFamily: 'Chakra Petch',
        fontSize: 16,
    }
  
  });