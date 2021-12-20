import React, { useState, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { ThemeContext } from 'styled-components';
import Container from '../shared/Container';
import Form from '../shared/Form';
import Select from '../shared/Select';
import Input from '../shared/Input';
import Title from '../shared/Title';
import Button from '../shared/Button';
import * as repoProvasServices from '../../services/repoProvas.service';
import validURL from './validURL';
import Swal from 'sweetalert2';

const SubmitExam = () => {
  const navigate = useNavigate();
  const theme = useContext(ThemeContext);
  const [categories, setCategories] = useState([]);
  const [disciplines, setDisciplines] = useState([]);
  const [teachers, setTeachers] = useState([]);

  const [formData, setFormData] = useState({
    url: '',
    year: '',
    name: '',
    semester: '',
    teacherId: '',
    disciplineId: '',
    categoryId: '',
  });

  const [errors, setErrors] = useState({
    url: '',
    year: '',
    name: '',
    semester: '',
    teacherId: '',
    disciplineId: '',
    categoryId: '',
  });

  const [isLoading, setIsLoading] = useState(false);

  const yearMask = (year) => year.replace(/[^0-9.]/g, '');

  useEffect(() => {
    setFormData({ ...formData, teacherId: '' })
    if (formData.disciplineId) {
      repoProvasServices
        .getTeachersByDisciplineId(formData.disciplineId)
        .then((response) => {
          setTeachers([...response.data])
        });
    }
  }, [formData.disciplineId]);

  useEffect(() => {
    repoProvasServices
      .getDisciplines()
      .then((response) => {
        setDisciplines([...response.data])
      });

    repoProvasServices
      .getCategories()
      .then((response) => {
        setCategories([...response.data])
      })
  }, []);

  const handleChange = (prop) => (event) => {
    setErrors({ ...errors, [prop]: '' });
    setFormData({ ...formData, [prop]: event.target.value });
  };

  const submitForm = (event) => {
    event.preventDefault();

    const { url, year } = formData;

    if (!validURL(url)) {
      setErrors({ url: 'URL inválida' });
      return;
    }

    if (url.substring(url.length - 4) !== '.pdf') {
      setErrors({ url: 'O arquivo deve ser um pdf' });
      return;
    }

    if (Number(year) < 1970 || Number(year) > 2022) {
      setErrors({ year: 'O ano deve ser entre 1970 e 2022' });
      return;
    }

    setIsLoading(true);
    repoProvasServices
      .createExam(formData)
      .then(() => {
        Swal.fire({
          icon: 'success',
          title: 'Sucesso!',
          text: 'Prova publicada com sucesso',
          confirmButtonColor: theme.color.primary,
        })
        setIsLoading(false);
      })
      .catch((error) => {
        console.error(error.response)
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: error.response.data,
          confirmButtonColor: theme.color.primary,
        });
        setIsLoading(false);
      })

  }

  return (
    <Container>
      <Title>Repo Provas</Title>
      <Form
        onSubmit={submitForm}
      >
        <Input
          placeholder="URL do PDF"
          type="text"
          value={formData.url}
          error={errors.url}
          onChange={handleChange('url')}
          disabled={isLoading}
          required
        />

        <Input
          placeholder="Ano (Ex.: 2018)"
          type="text"
          value={yearMask(formData.year)}
          error={errors.year}
          maxLength={4}
          onChange={handleChange('year')}
          disabled={isLoading}
          required
        />

        <Select
          value={formData.semester}
          onChange={handleChange('semester')}
          disabled={isLoading}
          required
        >
          <option value=""> Semestre </option>
          <option value={1}> 1 </option>
          <option value={2}> 2 </option>
        </Select>

        <Input
          placeholder="Nome (Ex.: 2021.1)"
          type="text"
          value={formData.name}
          error={errors.name}
          maxLength={50}
          onChange={handleChange('name')}
          disabled={isLoading}
        />

        <Select
          value={formData.categoryId}
          disabled={isLoading}
          onChange={handleChange('categoryId')}
          required
        >
          <option value=""> Categoria </option>
          {categories.length > 0 ? (
            categories.map((category) => (
              <option key={category.id} value={category.id}> {category.name} </option>
            ))
          ) : (
            <option disabled> Carregando... </option>
          )}
        </Select>

        <Select
          value={formData.disciplineId}
          disabled={isLoading}
          onChange={handleChange('disciplineId')}
          required
        >
          <option value=""> Disciplina </option>
          {disciplines.length > 0 ? (
            disciplines.map((discipline) => (
              <option key={discipline.id} value={discipline.id}> {discipline.name} </option>
            ))
          ) : (
            <option disabled> Carregando... </option>
          )}
        </Select>

        <Select
          value={formData.teacherId}
          disabled={isLoading}
          onChange={handleChange('teacherId')}
          required
        >
          <option value=""> Professor(a) </option>
          {teachers.length > 0 ? (
            teachers.map((teacher) => (
              <option key={teacher.id} value={teacher.id}> {teacher.name} </option>
            ))
          ) : (
            formData.disciplineId !== '' && (
              <option disabled> Carregando... </option>
            ))}
        </Select>
        <Button
          type="submit"
          isLoading={isLoading}
          marginBottom="medium"
        >
          Publicar
        </Button>
      </Form>

      <Button
        onClick={() => navigate('/')}
        isLoading={isLoading}
        keepText
      >
        Voltar
      </Button>
    </Container >
  );
};

export default SubmitExam;
