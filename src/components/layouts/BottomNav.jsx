import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './BottomNav.module.scss';
import {
  MdAdd,
  MdCheckCircleOutline,
  MdInbox,
  MdOutlineCalendarToday,
  MdOutlineSettings,
} from 'react-icons/md';

function BottomNav({ onClickCreateModal }) {
  const activeStyle = {
    color: 'black',
  };

  const handleCreateTodoModal = () => {
    onClickCreateModal();
  };

  return (
    <div className={classes.docker}>
      <NavLink
        to="/"
        style={({ isActive }) => (isActive ? activeStyle : undefined)}
        className={classes['bottom-nav']}
      >
        <MdCheckCircleOutline />
      </NavLink>
      <NavLink to="" className={classes['bottom-nav']}>
        <MdInbox />
      </NavLink>
      <NavLink to="" className={classes['bottom-nav']}>
        <MdOutlineCalendarToday />
      </NavLink>
      <NavLink
        to="/settings"
        style={({ isActive }) => (isActive ? activeStyle : undefined)}
        className={classes['bottom-nav']}
      >
        <MdOutlineSettings />
      </NavLink>
      <div className={classes['btn-create-todo']}>
        <button onClick={handleCreateTodoModal}>
          <MdAdd />
        </button>
      </div>
    </div>
  );
}

export default BottomNav;
