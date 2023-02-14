import React from 'react';
import { TodoProvider } from '../../context/TodoContext';
import TodoHead from './TodoHead';
import TodoList from './TodoList';
import classes from './Todos.module.scss';

function Todos() {
  return (
    <TodoProvider>
      <div className={classes.todos}>
        <TodoHead />
        <TodoList />
      </div>
    </TodoProvider>
  );
}

export default Todos;
