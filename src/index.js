import './style.css';
import addNewTodo from './addTodo.js';
import displayAllTodos from './listTodo.js';
import Todos from './Todos.js';

window.onload = () => {
  displayAllTodos();
};
document.addEventListener('keypress', addNewTodo);
const clearTodos = document.querySelector('#clearBtn');
clearTodos.addEventListener('click', Todos.deleteCompletedTodo);