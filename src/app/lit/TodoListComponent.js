import {LitElement, html, css} from 'lit';

class TodoListComponent extends LitElement {
  static properties = {
    tasks: {type: Array},
    categories: {type: Array},
    selectedDisplayCategory: {type: String, state: true},
    selectedAddCategory: {type: String, state: true},
    newTaskName: {type: String, state: true},
    newCategory: {type: String, state: true},
    theme: {type: String}
  };

  static styles = css`
    .defaultTheme {
      --delete-buttons-color: #f44336;
      --delete-buttons-hover-color: #d32f2f;
      --delete-buttons-text-color: white;
      --delete-buttons-border-color: none;
      --action-buttons-color: #4CAF50;
      --action-buttons-hover-color: #45a049;
      --action-buttons-text-color: white;
      --action-buttons-border-color: none;
      --input-select-border-color: black;
      --select-background-color: white;
      --select-text-color: black;
      --table-border-color: black;
    }

    .greenTheme {
      --delete-buttons-color: #114232;
      --delete-buttons-hover-color: #1b6549;
      --delete-buttons-text-color: #BFEA7C;
      --delete-buttons-border-color: #BFEA7C;
      --action-buttons-color: #BFEA7C;
      --action-buttons-hover-color: #a0e045;
      --action-buttons-text-color: #114232;
      --action-buttons-border-color: #4A7C59;
      --input-select-border-color: #4A7C59;
      --select-background-color: white;
      --select-text-color: #114232;
      --table-border-color: #4A7C59;
    }

    .blueTheme {
      --delete-buttons-color: #0B60B0;
      --delete-buttons-hover-color: #2e7cc4;
      --delete-buttons-text-color: #B4D4FF;
      --delete-buttons-border-color: #B4D4FF;
      --action-buttons-color: #B4D4FF;
      --action-buttons-hover-color: #76aaf3;
      --action-buttons-text-color: #0B60B0;
      --action-buttons-border-color: #86B6F6;
      --input-select-border-color: #86B6F6;
      --select-background-color: white;
      --select-text-color: #0B60B0;
      --table-border-color: #86B6F6;
    }

    .orangeTheme {
      --delete-buttons-color: #FC6736;
      --delete-buttons-hover-color: #f58361;
      --delete-buttons-text-color: #FFC374;
      --delete-buttons-border-color: #FFC374;
      --action-buttons-color: #FFC374;
      --action-buttons-hover-color: #faaa4f;
      --action-buttons-text-color: #FC6736;
      --action-buttons-border-color: #F6995C;
      --input-select-border-color: #F6995C;
      --select-background-color: white;
      --select-text-color: #FC6736;
      --table-border-color: #F6995C;
    }

    .purpleTheme {
      --delete-buttons-color: #492E87;
      --delete-buttons-hover-color: #5f41a8;
      --delete-buttons-text-color: #C499F3;
      --delete-buttons-border-color: #C499F3;
      --action-buttons-color: #C499F3;
      --action-buttons-hover-color: #a96ff5;
      --action-buttons-text-color: #492E87;
      --action-buttons-border-color: #8644A2;
      --input-select-border-color: #8644A2;
      --select-background-color: white;
      --select-text-color: #492E87;
      --table-border-color: #8644A2;
    }

    .todo-list-container {
      display: flex;
      flex-direction: column;
      align-items: center;
    }

    button, .select {
      cursor: pointer;
    }

    .input, .select {
      border: 2px solid var(--input-select-border-color);
    }

    button, .input, .select {
      margin-right: 10px;
      font-size: 16px;
      padding: 10px 20px;
      border-radius: 5px;
    }

    .select {
      background-color: var(--select-background-color);
      color: var(--select-text-color);
    }

    .action-button {
      background-color: var(--action-buttons-color);
      color: var(--action-buttons-text-color);
      border: 2px solid var(--action-buttons-border-color);
    }

    .action-button:hover {
      background-color: var(--action-buttons-hover-color);
    }

    .delete-button {
      background-color: var(--delete-buttons-color);
      color: var(--delete-buttons-text-color);
      border: 2px solid var(--delete-buttons-border-color);
    }

    .delete-button:hover {
      background-color: var(--delete-buttons-hover-color);
    }

    .table-wrapper {
      overflow-y: auto;
      max-height: 300px;
    }

    .task-table {
      width: 100%;
      border-collapse: collapse;
      table-layout: fixed;
    }

    .task-table th, .task-table td {
      padding: 8px;
      border: 2px solid var(--table-border-color);
      text-align: left;
      font-size: 16px;
      font-family: Arial, sans-serif;
    }

    h3 {
      font-family: Arial, sans-serif;
    }

    .input-wrapper {
      display: flex;
      align-items: center;
      margin-bottom: 10px;
    }
  `;

  constructor() {
    super();
    this.tasks = [];
    this.categories = [];
    this.newCategory = '';
    this.newTaskName = '';
  }

  renderCategoryInput() {
    return html`
      <div class="input-wrapper">

        <input class="input" type="text" .value="${this.newCategory}"
               @change="${e => this.newCategory = e.target.value}">

        <button class="action-button" @click="${() => this.addCategory()}">Add Category</button>

        <button class="delete-button" @click="${() => this.deleteCategory()}">Delete Category</button>

      </div>
    `
  }

  renderCategoryMenu() {
    return html`
      <div>

        <h3>Categories</h3>

        <div>

          <button class="action-button" @click="${() => this.selectDisplayCategory('')}">All</button>

          ${this.categories.map(category => html`
            <button class="action-button" @click="${() => this.selectDisplayCategory(category)}">${category}</button>
          `)}

        </div>

      </div>`
  }

  renderTaskList() {
    const filteredTasks = this.selectedDisplayCategory
      ? this.tasks.filter(task => task.category === this.selectedDisplayCategory)
      : this.tasks

    return html`
        <div>

            <h3>Tasks ${this.selectedDisplayCategory ? ` - ${this.selectedDisplayCategory}` : ''} </h3>

            <div class="table-wrapper">
                <table class="task-table">

                    <tr>
                        <th>Task</th>
                        <th>Category</th>
                        <th>Actions</th>
                    </tr>

                    ${filteredTasks.map(task => html`
                        <tr>
                            <td>${task.completed ? html`<s>${task.name}</s>` : `${task.name}`}</td>
                            <td>${task.category}</td>
                            <td>
                                <button class="action-button" @click="${() => this.toggleTaskCompletion(task)}">
                                    ${task.completed ? 'Undo' : 'Done'}
                                </button>
                                <button class="delete-button" @click="${() => this.deleteTask(task)}">Delete</button>
                            </td>
                        </tr>
                    `)}

                </table>
            </div>

        </div>
    `
  }

  renderTaskInput() {
    return html`
      <div class="input-wrapper">

        <input class="input" type="text" .value="${this.newTaskName}"
               @change="${e => this.newTaskName = e.target.value}">

        <select class="select" @change="${e => this.selectedAddCategory = e.target.value}">
          <option>Select a category</option>
          ${this.categories.map(category => html `
            <option .value="${category}">${category}</option>
          `)}
        </select>

        <button class="action-button" @click="${() => this.addTask()}">Add Task</button>

      </div>
    `
  }

  render() {
    let theme = 'defaultTheme'
    if(this.theme === "orangeTheme" || this.theme === "blueTheme" || this.theme === "purpleTheme" || this.theme === "greenTheme"){
      theme = this.theme;
    }
    return html `
        <div class="todo-list-container ${theme}">
            <!-- CATEGORY INPUT -->
            ${this.renderCategoryInput()}
            <!-- TASK INPUT -->
            ${this.renderTaskInput()}
            <!-- CATEGORY MENU -->
            ${this.renderCategoryMenu()}
            <!-- TASKS LIST -->
            ${this.renderTaskList()}
        </div>`
  }

  addCategory() {
    if (this.newCategory !== '' && !this.categories.includes(this.newCategory)) {
      this.categories = [...this.categories, this.newCategory];
      this.updateCategories();
      this.newCategory = "";
    }
    else {
      alert('Invalid input!');
    }
  }

  deleteCategory() {
    if (this.newCategory !== '' && this.categories.includes(this.newCategory)){
      this.categories = this.categories.filter(category => category !== this.newCategory)
      this.updateCategories();
      this.newCategory = "";
    } else {
      alert('Invalid input!');
    }
  }

  addTask() {
    if (this.newTaskName.trim() && this.selectedAddCategory && this.selectedAddCategory !== "Select a category") {
      const task = {name: this.newTaskName, category: this.selectedAddCategory, completed: false};
      this.tasks = [...this.tasks, task];
      this.updateTasks();
      this.newTaskName = '';
    } else {
      alert('Invalid input!');
    }
  }

  deleteTask(taskToDelete) {
    this.tasks = this.tasks.filter(task => task !== taskToDelete);
    this.updateTasks();
  }

  selectDisplayCategory(category) {
    this.selectedDisplayCategory = category;
  }

  toggleTaskCompletion(taskToToggle) {
    taskToToggle.completed = !taskToToggle.completed;
    this.tasks = [...this.tasks];
  }

  updateTasks() {
    this.dispatchEvent(new CustomEvent('tasks-changed', {detail: {tasks: this.tasks}}));
  }

  updateCategories() {
    this.dispatchEvent(new CustomEvent('categories-changed', {detail: {categories: this.categories}}));
  }
}

customElements.define('todo-list-component', TodoListComponent);
