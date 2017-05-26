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

    return (
      <div>
        <h4>THIS IS THE CAMPUS</h4>
        <form onSubmit={handleSubmit}>
          <fieldset>
            <legend>Edit Campus</legend>
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
        <div>
            <div>
              <h5>{ selectedCampus.name }</h5>
              <p>{ selectedCampus.location }</p>
              <p>{ selectedCampus.description }</p>
              <p>Students:</p>
              <ul>
              {
                selectedCampus.students && selectedCampus.students.map(student => (
                    <li key={ student.id }><Link to={`/student/${student.id}`}>{ student.name }</Link> <span className="del-button" onClick={ () => props.removeStudent(student.id) }><i className="fa fa-trash"></i></span></li>
                ))
              }
              </ul>
            </div>
            <NewStudentContainer />
        </div>
      </div>
    );
}