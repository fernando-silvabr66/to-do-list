class Todos {
  static todos = [];

  constructor(id, description) {
    this.id = id;
    this.description = description;
    this.completed = false;
  }

  static storage = (todos) => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }

  static itemsCount = () => this.todos.length;

  static updateItems = (id, newvalue) => {
    this.todos.forEach((todo) => {
      if (todo.id === id) {
        todo.description = newvalue;
      }
    });
    this.storage(this.todos);
  }

  static updateIndex = () => {
    const alltodos = JSON.parse(localStorage.getItem('todos'));
    for (let i = 0; i < alltodos.length; i += 1) {
      alltodos[i].id = i + 1;
    }
    localStorage.setItem('todos', JSON.stringify(alltodos));
  };

  static removeItem = (id) => {
    this.todos = this.todos.filter((todo) => todo.id !== id);
    this.storage(this.todos);
    this.updateIndex();
  };

  static updateCompleted = (id) => {
    this.todos.forEach((todo) => {
      if (todo.id === id) {
        todo.completed = !todo.completed;
      }
    });
    this.storage(this.todos);
  }

  static deleteCompletedTodo = () => {
    document.querySelectorAll('.completed').forEach((todoi) => {
      todoi.parentNode.parentNode.remove();
    });

    this.todos = this.todos.filter((todoi) => !todoi.completed);

    this.storage(this.todos);
    this.updateIndex();
    window.location.reload();
  };
}

export default Todos;
