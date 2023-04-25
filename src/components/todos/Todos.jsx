import React, { useEffect } from 'react';
import TodoCreate from './TodoCreate';
import TodoHead from './TodoHead';
import TodoList from './TodoList';
import { getTodosApi } from '../../util/firebaseAPI';
import { useDispatch } from 'react-redux';
import { fetchTodos } from '../../store/todoReducer';

function Todos({ isShowCreateModal, onClickCreateModal }) {
  const dispatch = useDispatch();
  const fetchData = async () => {
    try {
      const res = await getTodosApi();
      if (res) {
        dispatch(fetchTodos(res));
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

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
