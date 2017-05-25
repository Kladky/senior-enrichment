import { combineReducers } from 'redux';
import campusReducer from './campus-reducer';
import studentReducer from './student-reducer';

const initialState = {}

export default combineReducers({
  student: studentReducer,
  campus: campusReducer
});
