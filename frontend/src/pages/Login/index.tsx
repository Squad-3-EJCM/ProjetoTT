import { Botao2, BotaoTexto2, Email, Input, Logo, Senha } from '../Cadastro/style';
import { Botao, BotaoTexto, ContainerLogin,ContainerLogin2, TextoVisitante } from './style';
import { Pressable } from 'react-native';
import {useForm, Controller} from 'react-hook-form';

interface FormData{
  email: string;
  senha: string;
}

export default function Login() {


  const {control, handleSubmit} = useForm<FormData>();
  const onSubmit = (data: FormData) => {
    console.log(data)
  }

  return (
    <ContainerLogin>
      <Logo source={require("../../assets/Logo.png")}/>

      <ContainerLogin2>
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
      </ContainerLogin2>

      <ContainerLogin2>
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
      </ContainerLogin2>

      <Botao onPress={handleSubmit(onSubmit)}>
        <BotaoTexto>Login</BotaoTexto>
      </Botao>

      <Botao2>
        <BotaoTexto2>Cadastrar-se</BotaoTexto2>
      </Botao2>

      <Pressable>
        <TextoVisitante>Entrar como visitante</TextoVisitante>
      </Pressable>
    </ContainerLogin>
  );
}
 