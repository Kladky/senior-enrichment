import Student from '../components/Student';
import { connect } from 'react-redux';
import { removeStudent } from '../reducers/student-reducer';

const mapStateToProps = (state) => {
  return {
    students: state.student.list,
    selected: state.student.selected
  };
};

const mapDispatchToProps = { removeStudent };

const StudentContainer = connect(mapStateToProps, mapDispatchToProps)(Student);

export default StudentContainer;