import React from 'react';
import PropTypes from 'prop-types';

const Todo = ({ todo, completeTodo, removeTodo }) => {
  const { text, isCompleted, id } = todo;
  return (
    <li className="list-group-item">
      <span className="text-muted mr-3" style={{ textDecoration: isCompleted ? 'line-through' : '' }}>
        {text}
        <button
          className="btn btn-danger btn-sm float-right ml-2"
          type="button"
          onClick={() => removeTodo(id)}>
          x
        </button>
        <button
          className="btn btn-primary btn-sm float-right"
          type="button"
          onClick={() => completeTodo(id)}>
          Complete
        </button>
      </span>
    </li>
  );
};

Todo.propTypes = {
  todo: PropTypes.shape({
    text: PropTypes.string,
    isCompleted: PropTypes.bool,
    id: PropTypes.number,
  }).isRequired,
  completeTodo: PropTypes.func.isRequired,
  removeTodo: PropTypes.func.isRequired
};

export default Todo;
