import React, { useState } from 'react';
import { FaPencilAlt } from 'react-icons/fa';
import classes from './TodoCreate.module.scss';
import { addTodos } from '../../store/todoReducer';
import { addTodoApi } from '../../util/firebaseAPI';
import { useDispatch } from 'react-redux';

function TodoCreate({ onClickCreateModal }) {
  const dispatch = useDispatch();
  const [value, setValue] = useState('');

  const handleInputChange = (e) => {
    const { value } = e.target;
    setValue(value);
  };

  const handleSubmitForm = async (e) => {
    e.preventDefault();

    const newTodo = {
      content: value,
      date: new Date(),
      done: false,
    };
    try {
      const res = await addTodoApi(newTodo);
      if (res) {
        dispatch(addTodos(newTodo));
      }
    } catch (error) {
      console.error(error);
    }
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
