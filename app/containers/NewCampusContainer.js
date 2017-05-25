import React, { Component } from 'react';
import NewCampus from '../components/addCampus';
import { createCampus } from '../reducers/campus-reducer';
import { connect } from 'react-redux';

const mapDispatchToProps = (dispatch) => {
  return {
    createCampus (campus) {
      dispatch(createCampus(campus));
    }
  };
};

class NewCampusContainer extends Component {

  constructor(props) {
    super(props);
    this.state = {
      nameValue: '',
      locationValue: '',
      descriptionValue: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
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
  }

  handleSubmit (evt) {
    evt.preventDefault();
    this.props.createCampus({
      name: this.state.nameValue,
      location: this.state.locationValue,
      description: this.state.descriptionValue
    });
    this.setState({
      nameValue: '',
      locationValue: '',
      descriptionValue: ''
    });
  }

  render () {
    const nameValue = this.state.nameValue;
    const locationValue = this.state.locationValue;
    const descriptionValue = this.state.descriptionValue;

    return (
      <NewCampus
        handleChange={this.handleChange}
        handleSubmit={this.handleSubmit}
        nameValue={nameValue}
        locationValue={locationValue}
        descriptionValue={descriptionValue}
      />
    );
  }
}

export default connect(null, mapDispatchToProps)(NewCampusContainer);
