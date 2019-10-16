import React from 'react';
import PropTypes from 'prop-types';

const CountySelect = ({ handleChange, changeCountry, country }) => {
  return (
    <>
      <div className="row mt-3">
        <div className="col-md-12">
          <div className="input-group">
            <select
              className="custom-select"
              onChange={handleChange}
              defaultValue={country}
            >
              <option>Choose an Option</option>
              <option value="ng">Nigeria</option>
              <option value="ca">Canada</option>
              <option value="us">USA</option>
              <option value="sa">South Africa</option>
            </select>
            <div className="input-group-append">
              <button
                className="btn btn-info" type="button"
                onClick={changeCountry}>
                Get News
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

CountySelect.propTypes = {
  country: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  changeCountry: PropTypes.func.isRequired
};

export default CountySelect;
