// imnpport _ from 'lodash';

import './style.css';
import addNewTodo from './addTodo.js';
import displayAllTodos from './listTodo.js';
// eslint-disable-next-line no-unused-vars
// (it´s a function that will be constructed for Project 2-3)
// eslint-disable-next-line no-unused-vars
import Todos from './Todos.js';

window.onload = () => {
  displayAllTodos();
};
document.addEventListener('keypress', addNewTodo);
const clearTodos = document.querySelector('#clearBtn');
clearTodos.addEventListener('click', Todos.deleteCompletedTodo);