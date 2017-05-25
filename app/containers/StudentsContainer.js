import Students from '../components/Students';
import { connect } from 'react-redux';
import { removeStudent } from '../reducers/student-reducer';

const mapStateToProps = (state) => {
  return {
    students: state.student.list
  };
};

const mapDispatchToProps = { removeStudent };

const StudentsContainer = connect(mapStateToProps, mapDispatchToProps)(Students);

export default StudentsContainer;