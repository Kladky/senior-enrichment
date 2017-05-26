import React from 'react';

export default function NewStudent (props) {
  // Set some variables to access the props succinctly:
  const handleChange = props.handleChange;
  const handleSubmit = props.handleSubmit;
  const campusList = props.list;
  let nameValue = props.nameValue;
  let emailValue = props.emailValue;
  let selectedCampus = props.campusId;

  // Return the form for adding a student:
  return (
    <div className="form-wrapper">
      <form onSubmit={handleSubmit}>
        <fieldset>
          <legend>Add student</legend>
          <div className="form-group">
            <label>Name</label>
            <div>
              <input
                id="nameValue"
                type="text"
                required
                placeholder="Student name"
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
                placeholder="Enter a valid email address"
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
                value={selectedCampus !== 0 ? selectedCampus : undefined}
                onChange={handleChange}>
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
                Create student
              </button>
            </div>
          </div>
        </fieldset>
      </form>
    </div>
  );
};
