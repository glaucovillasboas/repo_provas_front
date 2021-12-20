import axios from 'axios';

const URL_API = process.env.REACT_APP_URL_API;

const getDisciplines = () => axios.get(`${URL_API}/disciplines`);

const getCategories = () => axios.get(`${URL_API}/categories`);

const getTeachersByDisciplineId = (disciplineId) => axios.get(`${URL_API}/teachers/discipline/${disciplineId}`);

const createExam = (body) => axios.post(`${URL_API}/tests`, body);

export {
  getDisciplines,
  getCategories,
  getTeachersByDisciplineId,
  createExam
};
