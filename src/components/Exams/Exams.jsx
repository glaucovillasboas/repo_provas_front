import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Container from '../shared/Container';
import Group from '../shared/Group';
import Form from '../shared/Form';
import Title from '../shared/Title';
import Text from '../shared/Text';
import Button from '../shared/Button';
import Select from '../shared/Select';
import * as repoProvasServices from '../../services/repoProvas.service';
import pdfIcon from '../../assets/images/pdf_icon.png';

const Exams = () => {
  const [teachers, setTeachers] = useState([]);
  const [disciplines, setDisciplines] = useState([]);
  const [exams, setExams] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    teacherId: '0',
    disciplineId: '0',
  });

  console.log(Object.keys(exams))
  const handleChange = (prop) => (event) => {
    setFormData({ ...formData, [prop]: event.target.value });
  };

  useEffect(() => {
    if (formData.disciplineId) {
      if (formData.disciplineId === '0') {
        repoProvasServices
          .getTeachers()
          .then((response) => {
            setTeachers([...response.data])
          });
      } else {
        repoProvasServices
          .getTeachersByDisciplineId(formData.disciplineId)
          .then((response) => {
            setTeachers([...response.data])
          });
      }
      setFormData({ ...formData, teacherId: '0' })

    } else {
      setTeachers([])
    }
  }, [formData.disciplineId]);

  useEffect(() => {
    repoProvasServices
      .getDisciplines()
      .then((response) => {
        setDisciplines([...response.data])
      });
  }, []);

  const openPdf = (url, name) => {
    window.open(
      url,
      name,
      'left=100,top=100,width=420,height=420',
    );
  }

  const search = (event) => {
    event.preventDefault();

    const { disciplineId, teacherId } = formData;
    setIsLoading(true);
    if (teacherId === '0') {
      repoProvasServices
        .getExamsByDisciplineId(disciplineId)
        .then((response) => {
          const tempArray = {
            'P1': [],
            'P2': [],
            'P3': [],
            '2ch': [],
            'Outras': []
          };

          response.data.forEach((exam) => {
            tempArray[exam.category.name].push(exam)
          })

          setIsLoading(false);
          setExams({ ...tempArray })

        }).catch((error) => {
          setIsLoading(false);
        })
    } else {
      repoProvasServices
        .getExamsByTeacherId(teacherId)
        .then((response) => {
          const filteredData = response.data.filter((exam) => exam.discipline.id === Number(disciplineId));
          const tempArray = {
            'P1': [],
            'P2': [],
            'P3': [],
            '2ch': [],
            'Outras': []
          };
          filteredData.forEach((exam) => {
            tempArray[exam.category.name].push(exam)
          })

          setIsLoading(false);
          setExams({ ...tempArray })
          console.log(filteredData);
        }).catch((error) => {
          setIsLoading(false);
        })
    }
  }


  return (
    <Container>
      <Title>Repo Provas</Title>
      <Form onSubmit={search}>
        <Text fontSize="large"> Disciplina: </Text>
        <Select
          value={formData.disciplineId}
          disabled={isLoading}
          onChange={handleChange('disciplineId')}
          required
        >
          <option value="0"> Todas </option>
          {disciplines.length > 0 ? (
            disciplines.map((discipline) => (
              <option
                key={discipline.id}
                value={discipline.id}>
                {discipline.name}
                {' '}
                ({discipline.testsCount} {discipline.testsCount !== 1 ? 'provas' : 'prova'})
              </option>
            ))
          ) : (
            <option disabled> Carregando... </option>
          )}
        </Select>
        <Text fontSize="large"> Professor(a): </Text>
        <Select
          value={formData.teacherId}
          disabled={isLoading}
          onChange={handleChange('teacherId')}
          marginBottom="large"
          required
        >
          <option value="0"> Todos </option>
          {teachers.length > 0 ? (
            teachers.map((teacher) => (
              <option
                key={teacher.id}
                value={teacher.id}>
                {teacher.name}
                {' '}
                ({teacher.testsCount} {teacher.testsCount !== 1 ? 'provas' : 'prova'})
              </option>
            ))
          ) : (
            formData.disciplineId !== '' && (
              <option disabled> Carregando... </option>
            )
          )}
        </Select>
        <Button
          marginBottom="medium"
          isLoading={isLoading}
          type="submit"
        >
          Buscar
        </Button>
      </Form>
      <Group paddingY="large">
        {Object.keys(exams).map((category) => (
          <>
            {exams[category].length > 0 && (
              <Text
                fontSize="large"
                fontWeight="bold"
                marginBottom="medium"
              > {category} </Text>
            )}
            {exams[category].map((exam) => (
              <Card
                key={exam.id}
                background="gray"
                flexProps={{ row: true }}
                onClick={() => openPdf(exam.url, exam.name)}
              >
                <PdfIcon src={pdfIcon} />
                <InfoCard
                  flexProps={{ justifyContent: 'space-between', alignItems: 'flex-start' }}
                  paddingX="medium"
                >
                  <Text color="black" maxWidth="200px" responsive> <strong>{exam.name}</strong> </Text>
                  <Text color="black" responsive> <strong>Ano</strong>: {exam.year} </Text>
                  <Text color="black" responsive> <strong>Semestre</strong>: {exam.semester} </Text>
                  <Text color="black" responsive> <strong>Categoria</strong>: {exam.category.name} </Text>
                  <Text color="black" responsive> <strong>Disciplina</strong>: {exam.discipline.name} </Text>
                  <Text color="black" responsive> <strong>Professor</strong>: {exam.teacher.name} </Text>
                </InfoCard>
              </Card>
            ))}
          </>
        ))}

      </Group>
    </Container >
  );
};

const PdfIcon = styled.img`
  height: 80%;
`;

const Card = styled(Group)`
  width: 100%;
  border-radius: 10px;
  height: 160px;
  margin-bottom: 10px;
  display: flex;
  align-items: center;
  padding: 5px;
  cursor: pointer;
`;

const InfoCard = styled(Group)`
  height: 100%;
`;

export default Exams;
