import {
  GET_STUDENTS,
  GET_STUDENT,
  DELETE_STUDENT,
  getStudents,
  getStudentById,
  deleteStudent
} from '../action-creators/students';

import {
  getCampuses,
  getCampusById
} from '../action-creators/campuses';

import axios from 'axios';

// Inside of "student" on the state, there will be two properties:
const initialStudentState = {
  selected: {},
  list: []
};

// Set up the reducer:
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

    default:
      return state;

  }

  return newState;

}

// Dispatch methods:

export const removeStudent = id => dispatch => {
  dispatch(deleteStudent(id));
  axios.delete(`/api/students/${id}`)
  .catch(err => console.error(`Removing student: ${id} unsuccessful`, err));
};

export const createStudent = studentInfo => dispatch => {
  axios.post(`/api/students`, studentInfo)
  .then(student => {
    //update the students list on the state:
    axios.get('/api/students')
    .then(response => response.data)
    .then(students => {
      dispatch(getStudents(students))
    })
    //update the current campus in case student is being added from that view
    dispatch(getCampusById(studentInfo.campusId))
  })
  .catch(err => console.error(`Adding student: ${studentInfo.name} unsuccessful`, err));
};

export const editStudent = studentInfo => dispatch => {
  axios.put(`/api/students/${studentInfo.id}`, studentInfo.updateInfo)
  .then(student => {
    //update the students list on the state:
    axios.get('/api/students')
    .then(response => response.data)
    .then(students => {
      dispatch(getStudents(students))
    })
    //update the selected student on the state:
    dispatch(getStudentById(student.data.id))
    //update the campuses list on the state:
    axios.get('/api/campuses')
    .then(response => response.data)
    .then(campuses => {
      dispatch(getCampuses(campuses))
    })
  })
  .catch(err => console.error(`Modifying student: ${studentInfo.name} unsuccessful`, err));
};
