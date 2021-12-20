import React from 'react';
import Container from '../shared/Container';
import Button from '../shared/Button';
import Title from '../shared/Title';

const Home = () => {

  return (
    <Container>
      <Title>Repo Provas</Title>
      <Button marginBottom="medium" big>
        Enviar provas
      </Button>
      <Button big>
        Ver provas
      </Button>
    </Container>
  );
};

export default Home;
