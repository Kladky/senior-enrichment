import {
  GET_CAMPUSES,
  GET_CAMPUS,
  DELETE_CAMPUS,
  getCampuses,
  getCampusById,
  deleteCampus,
} from '../action-creators/campuses';
import { getStudents } from '../action-creators/students';

import axios from 'axios';

// Inside of "campus" on the state, there will be two properties:
const initialCampusState = {
  selected: {},
  list: []
};

// Set up the reducer:
export default function (state = initialCampusState, action) {

  const newState = Object.assign({}, state);

  switch (action.type) {

    case GET_CAMPUSES:
      newState.list = action.campuses;
      break;

    case GET_CAMPUS:
      newState.selected = action.campus;
      break;

    case DELETE_CAMPUS:
      newState.list = state.list.filter(campus => campus.id !== action.campus);
      break;

    default:
      return state;

  }

  return newState;

}

// Dispatch methods:

export const removeCampus = id => dispatch => {
  dispatch(deleteCampus(id));
  axios.delete(`/api/campuses/${id}`)
  .catch(err => console.error(`Removing campus: ${id} unsuccessful`, err));
};

export const createCampus = campusInfo => dispatch => {
  axios.post(`/api/campuses`, campusInfo)
  .then(campus => {
    //update the campuses list on the state:
    axios.get('/api/campuses')
    .then(response => response.data)
    .then(campuses => {
      dispatch(getCampuses(campuses))
    })
  })
  .catch(err => console.error(`Adding campus: ${campusInfo.name} unsuccessful`, err));
};

export const editCampus = campusInfo => dispatch => {
  axios.put(`/api/campuses/${campusInfo.id}`, campusInfo.updateInfo)
  .then(campus => {
    //update the students list on the state:
    axios.get('/api/students')
    .then(response => response.data)
    .then(students => {
      dispatch(getStudents(students))
    })
    //update the selected student on the state:
    dispatch(getCampusById(campus.data.id))
    //update the campuses list on the state:
    axios.get('/api/campuses')
    .then(response => response.data)
    .then(campuses => {
      dispatch(getCampuses(campuses))
    })
  })
  .catch(err => console.error(`Modifying campus: ${campusInfo.name} unsuccessful`, err));
};