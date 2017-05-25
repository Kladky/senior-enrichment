import {
  GET_CAMPUSES,
  GET_CAMPUS,
  DELETE_CAMPUS,
  ADD_CAMPUS,
  getCampuses,
  deleteCampus,
  addCampus
} from '../action-creators/campuses';

import axios from 'axios';

const initialCampusState = {
  selected: {},
  list: []
};

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

    case ADD_CAMPUS:
      newState.list.push(action.campus);
      break;

    default:
      return state;

  }

  return newState;

}

export const removeCampus = id => dispatch => {
  dispatch(deleteCampus(id));
  axios.delete(`/api/campuses/${id}`)
       .catch(err => console.error(`Removing campus: ${id} unsuccessful`, err));
};

export const createCampus = campusInfo => dispatch => {
  axios.post(`/api/campuses`, campusInfo)
  .then(campus => {
    axios.get('/api/campuses')
    .then(response => response.data)
    .then(campuses => {
      dispatch(getCampuses(campuses))
    })
  })
  .catch(err => console.error(`Adding campus: ${campusInfo.name} unsuccessful`, err));
};