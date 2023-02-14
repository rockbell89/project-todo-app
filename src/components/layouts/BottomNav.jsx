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

function BottomNav() {
  const activeStyle = {
    color: 'black',
  };
  return (
    <div className={classes.docker}>
      <NavLink
        to="/"
        style={({ isActive }) => (isActive ? activeStyle : undefined)}
      >
        <MdCheckCircleOutline />
      </NavLink>
      <NavLink to="">
        <MdInbox />
      </NavLink>
      <NavLink to="">
        <MdOutlineCalendarToday />
      </NavLink>
      <NavLink
        to="/settings"
        style={({ isActive }) => (isActive ? activeStyle : undefined)}
      >
        <MdOutlineSettings />
      </NavLink>
      <button className={classes.button}>
        <MdAdd />
      </button>
    </div>
  );
}

export default BottomNav;
