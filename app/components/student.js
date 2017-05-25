import React from 'react';
import { Link } from 'react-router';

export default function Student (props) {
    const selectedStudent = props.selected;
    const handleChange = props.handleChange;
    const handleSubmit = props.handleSubmit;
    const campusList = props.list;

    let nameValue = props.nameValue;
    let emailValue = props.emailValue;
    let selectedCampus = props.campusId;

    return (
      <div>
        <h4>THIS IS THE STUDENT</h4>
        <form onSubmit={handleSubmit}>
            <fieldset>
              <legend>Edit Student</legend>
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
                <label>Email</label>
                <div>
                  <input
                    id="emailValue"
                    type="text"
                    required
                    onChange={handleChange}
                    value={emailValue}
                  />
                </div>
              </div>
              <div className="form-group">
                <label>Campus</label>
                <div>
                  <select
                    className="form-control"
                    id="campus"
                    required
                    value={selectedCampus !== 0 ? selectedCampus : top}
                    onChange={handleChange}>
                      <option value="top">choose:</option>
                      {
                        campusList && campusList.map(campus => (
                          <option key={campus.id} value={campus.id}>{campus.name}</option>
                        ))
                      }
                  </select>
                </div>
              </div>
              <div className="form-group">
                <div>
                  <button
                    type="submit"
                  >
                    Edit student
                  </button>
                </div>
              </div>
            </fieldset>
        </form>
        <div>
            <div>
              <h5>{ selectedStudent.name }</h5>
              <p>{ selectedStudent.email }</p>
              <p>Studies at:
                <Link to={`/campus/${selectedStudent.campus && selectedStudent.campus.id}`}> { selectedStudent.campus && selectedStudent.campus.name }</Link>
              </p>
            </div>
        </div>
      </div>
    );
}