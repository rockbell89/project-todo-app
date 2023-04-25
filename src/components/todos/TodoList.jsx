import React from 'react';
import { useTodoState } from '../../context/TodoContext';
import TodoItem from './TodoItem';
import classes from './TodoList.module.scss';
import { useSelector } from 'react-redux';

function TodoList() {
  const todos = useSelector((selector) => selector.todos);
  return (
    <div className={classes.list}>
      {todos.map((item) => (
        <TodoItem todo={item} key={item.id} />
      ))}
    </div>
  );
}

export default TodoList;
