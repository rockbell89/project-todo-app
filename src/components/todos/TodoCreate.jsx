import React, { useState } from 'react';
import { FaPencilAlt } from 'react-icons/fa';
import { useTodoDispatch } from '../../context/TodoContext';
import classes from './TodoCreate.module.scss';
import { v4 as uuidv4 } from 'uuid';

function TodoCreate({ onClickCreateModal }) {
  const dispatch = useTodoDispatch();
  const [value, setValue] = useState('');

  const handleInputChange = (e) => {
    const { value } = e.target;
    setValue(value);
  };

  const handleSubmitForm = (e) => {
    e.preventDefault();

    const newTodo = {
      id: uuidv4(),
      content: value,
      date: new Date(),
    };
    dispatch({ type: 'CREATE', todo: newTodo });
    setValue(null);
    onClickCreateModal();
  };

  const handlePressEnter = (e) => {
    if (e.key === 'Enter') {
      handleSubmitForm();
    }
  };

  return (
    <div className={classes.modal}>
      <button
        className={classes.backdrop}
        onClick={onClickCreateModal}
      ></button>
      <div className={classes.form}>
        <form onSubmit={handleSubmitForm}>
          <input
            type="text"
            value={value}
            onChange={handleInputChange}
            placeholder="할 일을 입력하세요!"
            onKeyUpCapture={handlePressEnter}
          />
          <button type="submit">
            <FaPencilAlt />
          </button>
        </form>
      </div>
    </div>
  );
}

export default TodoCreate;
