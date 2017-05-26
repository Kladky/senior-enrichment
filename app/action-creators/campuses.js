import axios from 'axios';

export const GET_CAMPUSES = 'GET_CAMPUSES';
export const GET_CAMPUS = 'GET_CAMPUS';
export const DELETE_CAMPUS = 'DELETE_CAMPUS';
export const ADD_CAMPUS = 'ADD_CAMPUS';
export const EDIT_CAMPUS = 'EDIT_CAMPUS';

export const getCampuses = campuses => ({
    type: GET_CAMPUSES,
    campuses
});

export const getCampusById = campusId => {
  return dispatch => {
    axios.get(`/api/campuses/${campusId}`)
      .then(response => {
        dispatch(getCampus(response.data));
      });
  };
};

export const getCampus = campus => ({
    type: GET_CAMPUS,
    campus
});

export const deleteCampus = campus => ({
    type: DELETE_CAMPUS,
    campus
});

export const addCampus = campus => ({
    type: ADD_CAMPUS,
    campus: campus.data
});