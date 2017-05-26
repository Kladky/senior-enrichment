import React, { Component } from 'react';
import Student from '../components/Student';
import { connect } from 'react-redux';
import { removeStudent, editStudent } from '../reducers/student-reducer';

const mapStateToProps = (state) => {
  return {
    students: state.student.list,
    selected: state.student.selected,
    list: state.campus.list
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    editStudent (student) {
        dispatch(editStudent(student));
    },
    removeStudent (student) {
        dispatch(removeStudent(student));
    }
  };
};

class StudentContainer extends Component {

  constructor(props) {
    super(props);
    this.state = {
      nameValue: "",
      emailValue: "",
      campusId: 0,
      studentId: 0
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

    componentWillReceiveProps (newProps, oldProps) {
        this.setState({
          nameValue: newProps.selected.name,
          emailValue: newProps.selected.email,
          campusId: newProps.selected.campusId,
          studentId: newProps.selected.id
        });
    }

  handleChange (evt) {
    const value = evt.target.value;
    if(evt.target.id === 'nameValue'){
      this.setState({
        nameValue: value
      });
    }
    if(evt.target.id === 'emailValue'){
      this.setState({
        emailValue: value
      });
    }
    if(evt.target.id === 'campus'){
      this.setState({
        campusId: value
      });
    }
  }

  handleSubmit (evt) {
    evt.preventDefault();
    this.props.editStudent({
        id: this.state.studentId,
        updateInfo: {
          name: this.state.nameValue,
          email: this.state.emailValue,
          campusId: this.state.campusId
        }
    });
  }

  render () {

    return (
      <Student
        {...this.state}
        {...this.props}
        handleChange={this.handleChange}
        handleSubmit={this.handleSubmit}
      />
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(StudentContainer);