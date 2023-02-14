import React from 'react';
import { useTodoState } from '../../context/TodoContext';
import TodoItem from './TodoItem';
import classes from './TodoList.module.scss';

function TodoList() {
  const todos = useTodoState();
  return (
    <div className={classes.list}>
      {todos.map((item) => (
        <TodoItem todo={item} key={item.id} />
      ))}
    </div>
  );
}

export default TodoList;
