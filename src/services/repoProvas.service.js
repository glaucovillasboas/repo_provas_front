import axios from 'axios';

const URL_API = process.env.REACT_APP_URL_API;

const getDisciplines = () => axios.get(`${URL_API}/disciplines`);

const getCategories = () => axios.get(`${URL_API}/categories`);

const getTeachers = () => axios.get(`${URL_API}/teachers`);

const getTeachersByDisciplineId = (disciplineId) => axios.get(`${URL_API}/teachers/discipline/${disciplineId}`);

const getExamsByDisciplineId = (disciplineId) => axios.get(`${URL_API}/tests/discipline/${disciplineId}`);

const getExamsByTeacherId = (teacherId) => axios.get(`${URL_API}/tests/teacher/${teacherId}`);

const createExam = (body) => axios.post(`${URL_API}/tests`, body);

export {
  getDisciplines,
  getCategories,
  getTeachers,
  getTeachersByDisciplineId,
  getExamsByDisciplineId,
  getExamsByTeacherId,
  createExam
};
