import { TODO_STATUS } from './status';

const initialState = [];

export const fetchTodos = (todos) => {
  return {
    type: TODO_STATUS.FETCH_TODOS_SUCCESS,
    payload: {
      todos,
    },
  };
};

export const addTodos = (todo) => {
  return {
    type: TODO_STATUS.ADD_TODOS_SUCCESS,
    payload: {
      todo,
    },
  };
};

export const toggleTodos = (id) => {
  return {
    type: TODO_STATUS.TOGGLE_TODOS_SUCCESS,
    payload: {
      id,
    },
  };
};

export const removeTodos = (id) => {
  return {
    type: TODO_STATUS.REMOVE_TODOS_SUCCESS,
    payload: {
      id,
    },
  };
};

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case TODO_STATUS.FETCH_TODOS_SUCCESS:
      return action.payload.todos;
    case TODO_STATUS.TOGGLE_TODOS_SUCCESS: {
      const toggle = state.map((todo) =>
        todo.id === action.payload.id ? { ...todo, done: !todo.done } : todo
      );
      return toggle;
    }
    case TODO_STATUS.ADD_TODOS_SUCCESS: {
      return [...state, action.payload.todo];
    }
    case TODO_STATUS.REMOVE_TODOS_SUCCESS: {
      return state.filter((todo) => todo.id !== action.payload.id);
    }
    default:
      return state;
  }
};

export default todoReducer;
