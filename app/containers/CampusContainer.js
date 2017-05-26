import React, { Component } from 'react';
import Campus from '../components/Campus';
import { connect } from 'react-redux';
import { removeCampus, editCampus } from '../reducers/campus-reducer';
import { removeStudent } from '../reducers/student-reducer';

const mapStateToProps = (state) => {
  return {
    campuses: state.campus.list,
    selected: state.campus.selected
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    editCampus (campus) {
        dispatch(editCampus(campus));
    },
    removeCampus (campus) {
        dispatch(removeCampus(campus));
    },
    removeStudent (student) {
        dispatch(removeStudent(student));
    }
  };
};

class CampusContainer extends Component {

  constructor(props) {
    super(props);
    this.state = {
      nameValue: '',
      locationValue: '',
      descriptionValue: '',
      campusId: 0,
      students: []
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

    componentWillReceiveProps (newProps, oldProps) {
        this.setState({
          nameValue: newProps.selected.name,
          locationValue: newProps.selected.location,
          descriptionValue: newProps.selected.description,
          campusId: newProps.selected.id,
          students: newProps.selected.students
        });
    }

  handleChange (evt) {
    const value = evt.target.value;
    if(evt.target.id === 'nameValue'){
      this.setState({
        nameValue: value
      });
    }
    if(evt.target.id === 'locationValue'){
      this.setState({
        locationValue: value
      });
    }
    if(evt.target.id === 'descriptionValue'){
      this.setState({
        descriptionValue: value
      });
    }
    if(evt.target.tagName === "I") {
        let newStudentList = this.state.students.filter(student => student.id != evt.target.id);
        console.log(newStudentList);
        this.setState({
            students: newStudentList
        });
        this.props.removeStudent(evt.target.id);
    }
  }

  handleSubmit (evt) {
    evt.preventDefault();
    this.props.editCampus({
        id: this.state.campusId,
        updateInfo: {
          name: this.state.nameValue,
          location: this.state.locationValue,
          description: this.state.descriptionValue
        }
    });
  }

  render () {

    return (
      <Campus
        {...this.state}
        {...this.props}
        handleChange={this.handleChange}
        handleSubmit={this.handleSubmit}
      />
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CampusContainer);