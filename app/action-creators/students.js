import axios from 'axios';

export const GET_STUDENTS = 'GET_STUDENTS';
export const GET_STUDENT = 'GET_STUDENT';
export const DELETE_STUDENT = 'DELETE_STUDENT';
export const ADD_STUDENT = 'ADD_STUDENT';

export const getStudents = students => ({
    type: GET_STUDENTS,
    students
});

export const getStudentById = studentId => {
  return dispatch => {
    axios.get(`/api/students/${studentId}`)
      .then(response => {
        dispatch(getStudent(response.data));
      });
  };
};

export const getStudent = student => ({
    type: GET_STUDENT,
    student
});

export const deleteStudent = student => ({
    type: DELETE_STUDENT,
    student
});

export const addStudent = student => ({
    type: ADD_STUDENT,
    student: student.data
});