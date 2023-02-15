import classNames from 'classnames';
import React from 'react';
import { MdOutlineDeleteOutline } from 'react-icons/md';
import { FaCalendar, FaCalendarCheck } from 'react-icons/fa';
import { useTodoDispatch } from '../../context/TodoContext';
import classes from './TodoItem.module.scss';

function TodoItem({ todo }) {
  const { id } = todo;
  const dispatch = useTodoDispatch();
  const onToggle = () => dispatch({ type: 'TOGGLE', id });
  const onRemove = () => dispatch({ type: 'REMOVE', id });

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
