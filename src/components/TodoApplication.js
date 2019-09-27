import React, { useState } from 'react';
import Todo from './Todo';
import TodoForm from './TodoForm';

const TodoApplication = () => {
  const [value, setValue] = useState('');
  const [todos, setTodo] = useState([
    {
      id: 1,
      text: 'Learn about React',
      isCompleted: false
    },
    {
      id: 2,
      text: 'Meet friend for lunch',
      isCompleted: false
    },
    {
      id: 3,
      text: 'Build really cool todo app',
      isCompleted: false
    }
  ]);

  const addTodo = () => {
    const id = todos.length > 0 ? (todos[todos.length - 1].id) + 1 : 1;
    if (!value) return;
    const newTodos = [...todos, { text: value, id, isCompleted: false }];
    setTodo(newTodos);
    setValue('');
  };

  const handleChange = (event) => {
    event.preventDefault();
    setValue(event.target.value);
  };

  const completeTodo = (id) => {
    const allTodos = [...todos];
    const newTodos = allTodos.map((todo) => {
      if (todo.id === id) {
        todo.isCompleted = !todo.isCompleted;
      }
      return todo;
    });

    setTodo(newTodos);
  };

  const removeTodo = (id) => {
    const allTodos = [...todos];
    const newTodos = allTodos.filter((todo) => {
      return todo.id !== id;
    });

    setTodo(newTodos);
  };

  return (
    <div className="content">
      <main>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <header className="header">
                <h1>Simple To Do Application</h1>
              </header>
            </div>
          </div>
        </div>
        <div className="container">
          <TodoForm
            value={value}
            addTodo={addTodo}
            handleChange={handleChange}
          />

          <div className="row">
            <div className="col-md-12">
              <h2 className="mt-4 mb-4">Your Todos</h2>
              <ul className="list-group">
                {todos.map((todo) => {
                  return (
                    <Todo
                      key={todo.id}
                      todo={todo}
                      completeTodo={completeTodo}
                      removeTodo={removeTodo}
                    />
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </main>
      <footer className="footer mt-auto py-3">
        <div className="container">
          <span className="text-muted small">
            <a className="link" href="https://github.com/eldrego/another-todo-application">
              <img
                className="icon"
                src="https://simpleicons.org/icons/github.svg"
                alt="Github svg"
              />
               MarkMade
            </a>
          </span>
        </div>
      </footer>
    </div>
  );
};

export default TodoApplication;
