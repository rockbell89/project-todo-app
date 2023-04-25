import {
  collection,
  doc,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
} from 'firebase/firestore';
import db from './firebase';

const TODOS = collection(db, 'todos');

export const getTodosApi = async () => {
  const docRef = await getDocs(TODOS);
  const todos = [];
  docRef.forEach((doc) => {
    const todo = doc.data();
    const date = todo.date.toDate();
    todos.push({ ...todo, id: doc.id, date });
  });
  return todos.sort((a, b) => a.date - b.date);
};

export const addTodoApi = async (newTodo) => {
  const addTodo = await addDoc(TODOS, newTodo);
  return addTodo;
};

export const toggleTodoApi = async (id) => {
  const docRef = await getDocs(TODOS);
  docRef.forEach(async (ref) => {
    if (ref.id === id) {
      const todo = await ref.data();
      const result = await updateDoc(doc(db, 'todos', id), {
        done: !todo.done,
      });
      return result;
    }
  });
  return true;
};

export const removeTodoApi = async (id) => {
  const docRef = await getDocs(TODOS);
  docRef.forEach(async (ref) => {
    if (ref.id === id) {
      const result = await deleteDoc(doc(db, 'todos', id));
      return result;
    }
  });
  return true;
};
