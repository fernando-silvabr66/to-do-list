import Todos from './Todos.js';
import displayAllTodos from './listTodo.js';

const input = document.querySelector('#todo-input');

const addNewTodo = (e) => {
  if (e.key === 'Enter') {
    let newIndex;
    if (Todos.itemsCount() === 0) {
      newIndex = 1;
    } else {
      newIndex = Todos.itemsCount() + 1;
    }
    const newTodo = new Todos(newIndex, input.value);
    Todos.todos.push(newTodo);
    Todos.storage(Todos.todos);
    document.querySelectorAll('.litodos').forEach((e) => e.remove());
    displayAllTodos();
    input.value = '';
    input.focus();
  }
};
export default addNewTodo;