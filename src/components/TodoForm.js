import React from 'react';
import PropTypes from 'prop-types';

const TodoForm = ({ value, addTodo, handleChange }) => {
  return (
    <div>
      <div className="row">
        <div className="col-md-12">
          <h2>Add a New Todo</h2>
          <div className="input-group">
            <input type="text" value={value} name="todo" className="form-control" onChange={handleChange} />
            <div className="input-group-append">
              <button
                onClick={addTodo}
                className="btn btn-warning"
                type="button"
              >
              Add
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

TodoForm.propTypes = {
  value: PropTypes.string.isRequired,
  addTodo: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired
};

export default TodoForm;
