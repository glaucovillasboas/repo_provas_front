import React from 'react';
import Container from '../shared/Container';
import Button from '../shared/Button';
import Title from '../shared/Title';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  return (
    <Container>
      <Title>Repo Provas</Title>
      <Button
        onClick={() => navigate('/submit')}
        marginBottom="medium"
        big
      >
        Publicar provas
      </Button>

      <Button
        onClick={() => navigate('/exams')}
        big
      >
        Ver provas
      </Button>
    </Container >
  );
};

export default Home;
