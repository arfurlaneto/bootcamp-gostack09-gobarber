import React from 'react';
import { Image } from 'react-native';

import logoImg from '../../assets/logo.png';

import Background from '~/components/Background';

import {
  Container,
  Form,
  FormInput,
  SubmitButton,
  SignLink,
  SignLinkText,
} from './styles';

export default function SignUp({ navigation }) {
  return (
    <Background>
      <Container>
        <Image source={logoImg} />

        <Form>
          <FormInput
            icon="person-outline"
            autoCorrect={false}
            autoCapitalize="none"
            placeholder="Nome completo"
          />

          <FormInput
            icon="mail-outline"
            keyboardType="email-address"
            autoCorrect={false}
            autoCapitalize="none"
            placeholder="Digite seu e-mail"
          />

          <FormInput
            icon="lock-outline"
            secureTextEntry
            placeholder="Sua senha secreta"
          />

          <SubmitButton onPress={() => {}}>Enviar</SubmitButton>
        </Form>

        <SignLink
          onPress={() => {
            navigation.navigate('SignIn');
          }}
        >
          <SignLinkText>Fazer login</SignLinkText>
        </SignLink>
      </Container>
    </Background>
  );
}
