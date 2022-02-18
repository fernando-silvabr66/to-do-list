import Todos from './Todos.js';

const displayAllTodos = () => {
  if (JSON.parse(localStorage.getItem('todos'))) {
    Todos.todos = JSON.parse(localStorage.getItem('todos'));

    let htmlTodo = '';
    Todos.todos.forEach((todo) => {
      htmlTodo = `
        <li class="litodos todo-${todo.id}">
          <div class="todo">
            <input type="checkbox" name="todo" class="check-${todo.id}"> 
            <input type="text" readonly class="todo-desc" value="${todo.description}" id="input-${todo.id}"/>
          </div>
          <i class="fas fa-ellipsis-v three-dot-icon-${todo.id}"></i>
          <i class="fas fa-trash trash-${todo.id}"></i>
        </li>
        `;

      const inputItem = document.getElementById('input-todo');
      inputItem.insertAdjacentHTML('afterend', htmlTodo);
      const threeDotIcon = document.querySelector(`.three-dot-icon-${todo.id}`);
      threeDotIcon.addEventListener('click', () => {
        const targetInput = document.querySelector(`#input-${todo.id}`);
        targetInput.removeAttribute('readonly');
        targetInput.focus();
        const span = document.createElement('span');
        span.textContent = 'Saved';
        threeDotIcon.insertAdjacentElement('afterend', span);
        threeDotIcon.classList.add('hidden');
        span.addEventListener('click', () => {
          Todos.updateItems(todo.id, targetInput.value);
          targetInput.setAttribute('readonly', 'readonly');
          threeDotIcon.classList.remove('hidden');
          span.classList.add('hidden');
        });
      });

      const trashIcon = document.querySelector(`.trash-${todo.id}`);
      trashIcon.addEventListener('click', () => {
        Todos.removeItem(todo.id);
        const targetTodo = document.querySelector(`.todo-${todo.id}`);
        targetTodo.remove();
      });

      const checkIcon = document.querySelector(`.check-${todo.id}`);
      const targetTodo = document.querySelector(`#input-${todo.id}`);

      checkIcon.addEventListener('change', () => {
        targetTodo.classList.toggle('completed');
        Todos.updateCompleted(todo.id);
      });

      if (todo.completed === true) {
        const targetTodo = document.querySelector(`#input-${todo.id}`);
        targetTodo.classList.toggle('completed');
        checkIcon.checked = true;
      }
    });
  }
};

export default displayAllTodos;