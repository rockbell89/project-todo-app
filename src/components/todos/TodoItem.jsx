import classNames from 'classnames';
import React from 'react';
import { MdOutlineDeleteOutline } from 'react-icons/md';
import { FaCalendar, FaCalendarCheck } from 'react-icons/fa';
import classes from './TodoItem.module.scss';
import { removeTodos, toggleTodos } from '../../store/todoReducer';
import { useDispatch } from 'react-redux';
import { toggleTodoApi, removeTodoApi } from '../../util/firebaseAPI';

function TodoItem({ todo }) {
  const { id } = todo;
  const dispatch = useDispatch();
  const onToggle = async () => {
    try {
      const res = await toggleTodoApi(id);
      console.log(res);
      if (res) {
        dispatch(toggleTodos(id));
      }
    } catch (error) {
      console.log(error);
    }
  };
  const onRemove = async () => {
    try {
      const res = await removeTodoApi(id);
      if (res) {
        dispatch(removeTodos(id));
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div
      className={classNames(classes.item, {
        [classes['is-done']]: todo.done,
      })}
    >
      <div className={classes['item-contents']}>
        <div>
          <input type="checkbox" onChange={onToggle} id={`toggle-${todo.id}`} />
          {!todo.done ? <FaCalendar /> : <FaCalendarCheck />}
        </div>
        <div>
          <label htmlFor={`toggle-${todo.id}`}>
            <p>{todo.content}</p>
            <span>{todo.date.toLocaleString()}</span>
          </label>
        </div>
      </div>
      <button className={classes['btn-remove-item']} onClick={onRemove}>
        <MdOutlineDeleteOutline />
      </button>
    </div>
  );
}

export default TodoItem;
