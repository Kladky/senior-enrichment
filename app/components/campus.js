import React from 'react';
import { Link } from 'react-router';
import NewStudentContainer from '../containers/NewStudentContainer';

export default function Campus (props) {
    const selectedCampus = props.selected;
    const handleChange = props.handleChange;
    const handleSubmit = props.handleSubmit;

    let nameValue = props.nameValue;
    let locationValue = props.locationValue;
    let descriptionValue = props.descriptionValue;
    let students = props.students;

    return (
      <div>
        <h1>{ selectedCampus.name }</h1>
        <div className="form-wrapper">
          <form onSubmit={handleSubmit}>
            <fieldset>
              <legend>Edit campus</legend>
              <div className="form-group">
                <label>Name</label>
                <div>
                  <input
                    id="nameValue"
                    type="text"
                    required
                    onChange={handleChange}
                    value={nameValue}
                  />
                </div>
              </div>
              <div className="form-group">
                <label>Location</label>
                <div>
                  <input
                    id="locationValue"
                    type="text"
                    onChange={handleChange}
                    value={locationValue}
                  />
                </div>
              </div>
              <div className="form-group">
                <label>Description</label>
                <div>
                  <input
                    id="descriptionValue"
                    type="text"
                    onChange={handleChange}
                    value={descriptionValue}
                  />
                </div>
              </div>
              <div className="form-group">
                <div>
                  <button
                    type="submit"
                  >
                    Save edits
                  </button>
                </div>
              </div>
            </fieldset>
          </form>
        </div>
        <NewStudentContainer />
        <div>
            <div>
              <h2>{ selectedCampus.name }'s details:</h2>
              <p>Location: { selectedCampus.location || "no location?!?!" }</p>
              <p>Description: { selectedCampus.description || "no description?!?!" }</p>
              <p>Students:</p>
              <ul>
              {
                students && students.map(student => (
                    <li key={ student.id }><Link to={`/student/${student.id}`}>{ student.name }</Link> <span title="delete" className="del-button"><i className="fa fa-trash" id={ student.id } onClick={handleChange}></i></span></li>
                ))
              }
              </ul>
            </div>
        </div>
      </div>
    );
}