import axios from 'axios';

// Actions:

export const GET_CAMPUSES = 'GET_CAMPUSES';
export const GET_CAMPUS = 'GET_CAMPUS';
export const DELETE_CAMPUS = 'DELETE_CAMPUS';
export const EDIT_CAMPUS = 'EDIT_CAMPUS';

// Action creators:

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