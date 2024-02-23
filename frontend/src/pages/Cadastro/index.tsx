import { Botao2, BotaoTexto2, CheckboxText, ContainerCadastro, ContainerCadastro2, ContainerCadastro3, Email, Input, Logo, Senha } from './style';
import {useFonts} from 'expo-font'
import CheckBox from '../../components/Checkbox';
import {useForm, Controller} from 'react-hook-form';
import { useNavigation } from "@react-navigation/native";

interface FormData{
  email: string;
  senha: string;
  confirmarSenha: string;
}

export default function Cadastro() {

  const navigation = useNavigation();

  const {control, handleSubmit, getValues} = useForm<FormData>();
  const onSubmit = (data: FormData) => {
    console.log(data)
  }

    return (
      <ContainerCadastro>
        
        <Logo source={require("../../assets/Logo.png")}/>

        <ContainerCadastro2>
          <Email source={require("../../assets/email.png")}/>
          <Controller
          control={control}
          name = 'email'
          render = {({field: {onBlur, onChange, value}}) => (
            <Input 
              onBlur={onBlur}
              onChangeText={(value) => onChange(value)}
              value = {value}
              placeholder='E-mail' 
            />
          )}
          rules={{
            required: 'o email é obrigatório',
            maxLength: 90,
          }}
          defaultValue=''
        />  
        </ContainerCadastro2>

        <ContainerCadastro2>
          <Senha source={require("../../assets/cadeado.png")}/>
          
          <Controller
            control={control}
            name = 'senha'
            render = {({field: {onBlur, onChange, value}}) => (
              <Input 
                onBlur={onBlur}
                onChangeText={(value) => onChange(value)}
                value = {value}
                placeholder='Senha' 
              />
            )}
            rules={{
              required: 'a senha é obrigatória',
              minLength: 8,

            }}
            defaultValue=''
          /> 
        </ContainerCadastro2>

        <ContainerCadastro2>
          <Senha source={require("../../assets/cadeado.png")}/>
          <Controller
            control={control}
            name = 'confirmarSenha'
            render = {({field: {onBlur, onChange, value}}) => (
              <Input 
                onBlur={onBlur}
                onChangeText={(value) => onChange(value)}
                value = {value}
                placeholder='Confirmar Senha' 
              />
            )}
            rules={{
              validate:{
                matchesPreviusPassword: (value) => {
                  const {senha} = getValues();
                  return senha === value || 'senha diferente';
                }
              },
              required: 'a senha é obrigatória',
              minLength: 8,

            }}
            defaultValue=''
          /> 
        </ContainerCadastro2>

        <ContainerCadastro3>
          <CheckBox/>
          <CheckboxText>Concordo com os termos e condições de uso</CheckboxText>
        </ContainerCadastro3>
        
  
        <Botao2 onPress={()=>{handleSubmit(onSubmit); navigation.navigate('ConfirmarEmail' as never)}}>
          <BotaoTexto2>Finalizar Cadastro</BotaoTexto2>
        </Botao2>
      </ContainerCadastro>
    );
}


