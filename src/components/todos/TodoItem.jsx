import React from 'react';
import { MdOutlineDeleteOutline } from 'react-icons/md';
import { useTodoDispatch } from '../../context/TodoContext';
import classes from './TodoItem.module.scss';

function TodoItem({ todo }) {
  const { id } = todo;
  const dispatch = useTodoDispatch();
  const onToggle = () => dispatch({ type: 'TOGGLE', id });
  const onRemove = () => dispatch({ type: 'REMOVE', id });

  return (
    <div className={classes.item}>
      <div className={classes['item-contents']}>
        <div>
          <input type="checkbox" onChange={onToggle} id="toggle" />
        </div>
        <div>
          <p>{todo.content}</p>
          <span>{todo.date.toLocaleString()}</span>
        </div>
      </div>
      <button className={classes['btn-remove-item']} onClick={onRemove}>
        <MdOutlineDeleteOutline />
      </button>
    </div>
  );
}

export default TodoItem;
