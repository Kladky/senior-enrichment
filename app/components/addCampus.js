import React from 'react';

export default function NewCampus (props) {

  const handleChange = props.handleChange;
  const handleSubmit = props.handleSubmit;
  const nameValue = props.nameValue;
  const locationValue = props.locationValue;
  const descriptionValue = props.descriptionValue;

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <fieldset>
          <legend>New Campus</legend>
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
                Create campus
              </button>
            </div>
          </div>
        </fieldset>
      </form>
    </div>
  );
};
