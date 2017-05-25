import React from 'react';
import { Router, Route, browserHistory, IndexRedirect, IndexRoute } from 'react-router';
import { Provider } from 'react-redux';
import axios from 'axios';

import store from './store';

import Root from './components/Root';

import CampusesContainer from './containers/CampusesContainer';
import StudentsContainer from './containers/StudentsContainer';
import CampusContainer from './containers/CampusContainer';
import StudentContainer from './containers/StudentContainer';

import { getStudents, getStudentById } from './action-creators/students';
import { getCampuses, getCampus } from './action-creators/campuses';

const onAppEnter = () => {
  const gStudents = axios.get('/api/students');
  const gCampuses = axios.get('/api/campuses');

  return Promise
    .all([gStudents, gCampuses])
    .then(responses => responses.map(r => r.data))
    .then(([students, campuses]) => {
      store.dispatch(getCampuses(campuses));
      store.dispatch(getStudents(students));
    });
};

const onStudentEnter = function (nextRouterState) {
  const studentId = nextRouterState.params.studentId;
  store.dispatch(getStudentById(studentId));
};

export default function App () {
  return (
    <Provider store={store}>
      <Router history={browserHistory}>
        <Route path="/" component={Root} onEnter={onAppEnter}>
          <Route path="/students" component={StudentsContainer}/>
          <Route path="/campuses" component={CampusesContainer}/>
          <Route path="/student/:studentId" component={StudentContainer} onEnter={onStudentEnter}/>
        </Route>
      </Router>
    </Provider>
  );
}