// imnpport _ from 'lodash';

import './style.css';
import addNewTodo from './addTodo.js';
import displayAllTodos from './listTodo.js';
import Todos from './Todos.js';

window.onload = () => {
  displayAllTodos();
};
document.addEventListener('keypress', addNewTodo);