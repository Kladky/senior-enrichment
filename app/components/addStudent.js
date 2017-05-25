import React from 'react';

export default function NewStudent (props) {

  const handleChange = props.handleChange;
  const handleSubmit = props.handleSubmit;
  const nameValue = props.nameValue;
  const emailValue = props.emailValue;
  const campusList = props.list;
  const selectedCampus = props.campusId;

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <fieldset>
          <legend>New Student</legend>
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
                Create student
              </button>
            </div>
          </div>
        </fieldset>
      </form>
    </div>
  );
};
