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
        <h1>{ selectedStudent.name }</h1>
        <div className="form-wrapper">
            <form onSubmit={handleSubmit}>
                <fieldset>
                  <legend>Edit student</legend>
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
                        type="email"
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
                        Save edits
                      </button>
                    </div>
                  </div>
                </fieldset>
            </form>
        </div>
        <div>
            <div>
              <h2>Student Info:</h2>
              <p>Email: { selectedStudent.email }</p>
              <p>Studies at:
                <Link to={`/campus/${selectedStudent.campus && selectedStudent.campus.id}`}> { selectedStudent.campus && selectedStudent.campus.name }</Link>
              </p>
            </div>
        </div>
      </div>
    );
}