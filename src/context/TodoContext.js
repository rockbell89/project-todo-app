import { createContext, useContext, useReducer } from 'react';

const initialTodos = [
  {
    id: 1,
    content: 'React Todo 만들기',
    date: new Date(),
    done: false,
  },
  {
    id: 2,
    content: 'Reducer 활용하기',
    date: new Date(),
    done: false,
  },
  {
    id: 3,
    content: 'Redux Toolkit 사용해보기',
    date: new Date(),
    done: false,
  },
  {
    id: 4,
    content: 'React Router',
    date: new Date(),
    done: false,
  },
  {
    id: 5,
    content: 'Redux 사용해보기',
    date: new Date(),
    done: false,
  },
  {
    id: 7,
    content: 'Redux Saga 사용해보기',
    date: new Date(),
    done: false,
  },
  {
    id: 8,
    content: 'React Typescript',
    date: new Date(),
    done: false,
  },
  {
    id: 9,
    content: 'module.css',
    date: new Date(),
    done: false,
  },
  {
    id: 10,
    content: 'React 완벽정리',
    date: new Date(),
    done: false,
  },
];

function todoReducer(state, action) {
  switch (action.type) {
    case 'CREATE':
      return state.concat(action.todo);
    case 'TOGGLE':
      return state.map((todo) =>
        todo.id === action.id ? { ...todo, done: !todo.done } : todo
      );
    case 'REMOVE':
      return state.filter((todo) => todo.id !== action.id);
    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
}

const TodoStateContext = createContext();
const TodoDispatchContext = createContext();

export function TodoProvider({ children }) {
  const [state, dispatch] = useReducer(todoReducer, initialTodos);
  return (
    <TodoStateContext.Provider value={state}>
      <TodoDispatchContext.Provider value={dispatch}>
        {children}
      </TodoDispatchContext.Provider>
    </TodoStateContext.Provider>
  );
}

export function useTodoState() {
  return useContext(TodoStateContext);
}

export function useTodoDispatch() {
  return useContext(TodoDispatchContext);
}
