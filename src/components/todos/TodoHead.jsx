import React from 'react';
import classes from './TodoHead.module.scss';

function TodoHead() {
  return (
    <div className={classes.head}>
      <h2>Todo List</h2>
      <span>{new Date().toLocaleDateString()}</span>
    </div>
  );
}

export default TodoHead;
