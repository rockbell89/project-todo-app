import React from 'react';

import TodoCreate from './TodoCreate';
import TodoHead from './TodoHead';
import TodoList from './TodoList';
import classes from './Todos.module.scss';

function Todos({ isShowCreateModal, onClickCreateModal }) {
  return (
    <>
      <TodoHead />
      <TodoList />
      {isShowCreateModal && (
        <TodoCreate onClickCreateModal={onClickCreateModal} />
      )}
    </>
  );
}

export default Todos;
