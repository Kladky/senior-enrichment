import {
  GET_STUDENTS,
  GET_STUDENT,
  DELETE_STUDENT,
  ADD_STUDENT,
  getStudents,
  addStudent,
  deleteStudent
} from '../action-creators/students';

import axios from 'axios';

const initialStudentState = {
  selected: {},
  list: []
};

export default function (state = initialStudentState, action) {

  const newState = Object.assign({}, state);

  switch (action.type) {

    case GET_STUDENTS:
      newState.list = action.students;
      break;

    case GET_STUDENT:
      newState.selected = action.student;
      break;

    case DELETE_STUDENT:
      newState.list = state.list.filter(student => student.id !== action.student);
      break;

    case ADD_STUDENT:
      newState.list.push(action.student);
      break;

    default:
      return state;

  }

  return newState;

}

export const removeStudent = id => dispatch => {
  dispatch(deleteStudent(id));
  axios.delete(`/api/students/${id}`)
       .catch(err => console.error(`Removing student: ${id} unsuccessful`, err));
};

export const createStudent = studentInfo => dispatch => {
  axios.post(`/api/students`, studentInfo)
  .then(student => {
    axios.get('/api/students')
    .then(response => response.data)
    .then(students => {
      dispatch(getStudents(students))
    })
  })
  .catch(err => console.error(`Adding student: ${studentInfo.name} unsuccessful`, err));
};
