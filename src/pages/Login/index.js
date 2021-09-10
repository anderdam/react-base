import React from 'react';
import { Title, Paragrafo } from './styled';
import { Container } from '../../styles/GlobalStyles';

export default function Login() {
  return (
    <Container>
      <div>
        <Title>
          Login
          <small>Acessar</small>
        </Title>
        <Paragrafo>Lorem ipsum dolor sit amet.</Paragrafo>
        <button type="button">Enviar</button>
      </div>
    </Container>
  );
}
