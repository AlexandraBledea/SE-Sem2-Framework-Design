# TodoListComponent
`TodoListComponent` is a web component built with LitElement that allows users to manage tasks within categories. Users can add, delete, and filter tasks, mark tasks as done or undone, as well as add and delete categories.

## Features
- Add and delete tasks.
- Mark tasks as done or mark them as undone.
- Filter tasks by categories.
- Add and delete categories.
- Theming support with customizable color schemes.

## Public Properties

- **tasks**: Array of Objects. A task is an object that has the following attributes: name (String), category (String), completed (Boolean).
  - Default: `[ ]`
  - Description: Stores the list of tasks.

- **categories**: Array of Strings
  - Default: `[ ]`
  - Description: Stores the list of categories.

- **theme**: String
  - Default: `defaultTheme`
  - Description: Determines the theme of the component. It can have the following values:
    - `purpleTheme`
    - `blueTheme`
    - `greenTheme`
    - `orangeTheme`
    - `defaultTheme`

## Internal (Private) Properties

- **selectedDisplayCategory**: String
  - Default: `" "`
  - Description: Used internally to track the currently selected category for display

- **selectedAddCategory**: String
  - Default: `" "`
  - Description: Used internally to track the selected category when adding a new task.

- **newTaskName**: String
  - Default: `" "`
  - Description: Used internally to hold the name for a newly added task.

- **newCategory**: String
  - Default: `" "`
  - Description: Used internally to hold the category to be added or deleted.

## Events
| Name | Detail | Description |
| ------------- | ------------- | ------------- |
| tasks-changed  | {tasks: Array} | Fired when a task is added, deleted or modified |
| categories-changed  | {categories: Array}  | Fired when a category is added or deleted |

## Methods

- **addCategory()**
  - Description: Adds a new category to the `categories` array if it's not already present, updates the view, and triggers the `categories-changed` event.

- **deleteCategory()**
  - Description: Removes an existing category from the `categories` array, updates the view, and triggers the `categories-changed` event.

- **addTask()**
  - Description: Creates and adds a new task object to the `tasks` array based on`newTaskName` and `selectedAddCategory`, updates the view, and triggers the `tasks-changed` event.
 
- **deleteTask(task)**
  - Description: Removes a specific task object from the `tasks` array, updates the view, and triggers the `tasks-changed` event.

- **selectDisplayCategory(category)**
  - Description: Sets the `selectedDisplayCategory` to filter tasks displayed by category.

- **toggleTaskCompletion(task)**
  - Description: Toggles the `completed` status of a task, updates the view, and triggers the `tasks-changed` event.

## Rendering

- **render()**
  - Description: Main render method that combines different UI parts of the todo list.

- **renderCategoryInput()**
  - Description: Renders input fields for adding or deleting categories.

- **renderTaskInput()**
  - Description: Renders input fields for adding a new task.
 
- **renderCategoryMenu()**
  - Description: Renders buttons for each category to filter tasks.

- **renderTaskList()**
  - Description: Displays tasks filtered by the selected category.


## Usage
To use 'TodoListComponent' in your HTML:
```html
<todo-list-component></todo-list-component>
```

## Customization
### Examples
1. For Pure JavaScript
```html
<todo-list-component id="todoList" theme="greenTheme"></todo-list-component>
```
```javascript
const todoListComponent = document.getElementById('todoList');

// Initializing tasks
todoListComponent.tasks = [
  { name: 'Task 1', category: 'Work', completed: false },
  { name: 'Task 2', category: 'Home', completed: true },
];

// Initializing categories
todoListComponent.categories = ['Work', 'Home', 'Personal'];

// Add listener for `tasks-changed` event
document.getElementById('todoList').addEventListener('tasks-changed', (event) => {
  console.log('Tasks have changed:', event.detail.tasks);
});

// Add listener for `categories-changed` event
document.getElementById('todoList').addEventListener('categories-changed', (event) => {
  console.log('Categories have changed:', event.detail.tasks);
});
```
2. For Angular
```html
<todo-list-component [tasks]="tasks" [categories]="categories" (tasks-changed)="onTasksChanged($event)" (categories-changed)="onCategoriesChanged($event)" theme="purpleTheme"></todo-list-component>
```

```typescript
export class NameComponent{

  tasks: Task[] = [{name: 'Create Notification Component', category: 'School', completed: false}, {name: 'Create Timer Component', category: 'School', completed: true}]
  categories: String[] = ['School', 'Personal', 'Work', 'Shopping']

  onTasksChanged(event: any){
    this.tasks = event.detail.tasks;
  }

  onCategoriesChanged(event: any){
    this.categories = event.detail.categories;
  }

}
```


## CSS Custom Properties
### defaultTheme
| Custom Property | Description | Default |
| ------------- | ------------- | ------------- |
| --delete-buttons-color | Color delete buttons | - ![#f44336](https://placehold.co/15x15/f44336/f44336.png) `#f44336` |
|--delete-buttons-hover-color  | Hover color delete buttons  | - ![#d32f2f](https://placehold.co/15x15/d32f2f/d32f2f.png) `#d32f2f` |
| --delete-buttons-text-color | Text color delete buttons  | - ![#white](https://placehold.co/15x15/white/white.png) `#white` |
|  --delete-buttons-border-color | Border color delete buttons  | none |
| --action-buttons-color | Color for all the other buttons  | - ![#4CAF50](https://placehold.co/15x15/4CAF50/4CAF50.png) `#4CAF50` |
| --action-buttons-hover-color | Hover color for all the other buttons  | - ![#45a049](https://placehold.co/15x15/45a049/45a049.png) `#45a049` |
| --action-buttons-text-color | Text color for all the other buttons  | - ![#white](https://placehold.co/15x15/white/white.png) `#white` |
| --action-buttons-border-color | Border color for all the other buttons  | none  |
|  --input-select-border-color | Border color input and select | - ![#black](https://placehold.co/15x15/black/black.png) `#black` |
| --select-background-color | Background color select |  - ![#white](https://placehold.co/15x15/white/white.png) `#white`|
| --select-text-color | Text color select  | - ![#black](https://placehold.co/15x15/black/black.png) `#black` |
|  --table-border-color| Border color table  | - ![#black](https://placehold.co/15x15/black/black.png) `#black` |

![image](https://github.com/AlexandraBledea/SE-Sem2-Framework-Design/assets/72063091/4443adfe-261e-42dc-8033-cb0a07986fe5)

### greenTheme
| Custom Property | Description | Default |
| ------------- | ------------- | ------------- |
| --delete-buttons-color | Color delete buttons | - ![#114232](https://placehold.co/15x15/114232/114232.png) `#114232` |
|--delete-buttons-hover-color  | Hover color delete buttons  | - ![#1b6549](https://placehold.co/15x15/1b6549/1b6549.png) `#1b6549` |
| --delete-buttons-text-color | Text color delete buttons  |- ![#BFEA7C](https://placehold.co/15x15/BFEA7C/BFEA7C.png) `#BFEA7C`  |
|  --delete-buttons-border-color | Border color delete buttons  | - ![#BFEA7C](https://placehold.co/15x15/BFEA7C/BFEA7C.png) `#BFEA7C` |
| --action-buttons-color | Color for all the other buttons  | - ![#BFEA7C](https://placehold.co/15x15/BFEA7C/BFEA7C.png) `#BFEA7C` |
| --action-buttons-hover-color | Hover color for all the other buttons  |- ![#a0e045](https://placehold.co/15x15/a0e045/a0e045.png) `#a0e045`  |
| --action-buttons-text-color | Text color for all the other buttons  | - ![#114232](https://placehold.co/15x15/114232/114232.png) `#114232` |
| --action-buttons-border-color | Border color for all the other buttons  | - ![#4A7C59](https://placehold.co/15x15/4A7C59/4A7C59.png) `#4A7C59` |
|  --input-select-border-color | Border color input and select | - ![#4A7C59](https://placehold.co/15x15/4A7C59/4A7C59.png) `#4A7C59` |
| --select-background-color | Background color select |- ![#white](https://placehold.co/15x15/white/white.png) `#white`  |
| --select-text-color | Text color select  | - ![#114232](https://placehold.co/15x15/114232/114232.png) `#114232` |
|  --table-border-color| Border color table  |- ![#4A7C59](https://placehold.co/15x15/114232/114232.png) `#4A7C59`  |

![image](https://github.com/AlexandraBledea/SE-Sem2-Framework-Design/assets/72063091/895a3c90-484f-4789-a299-31462fb73641)

### blueTheme
| Custom Property | Description | Default |
| ------------- | ------------- | ------------- |
| --delete-buttons-color | Color delete buttons |  - ![#0B60B0](https://placehold.co/15x15/0B60B0/0B60B0.png) `#0B60B0`|
|--delete-buttons-hover-color  | Hover color delete buttons  |  - ![#2e7cc4](https://placehold.co/15x15/2e7cc4/2e7cc4.png) `#2e7cc4` |
| --delete-buttons-text-color | Text color delete buttons  |  - ![#B4D4FF](https://placehold.co/15x15/B4D4FF/B4D4FF.png) `#B4D4FF` |
|  --delete-buttons-border-color | Border color delete buttons  |   - ![#B4D4FF](https://placehold.co/15x15/B4D4FF/B4D4FF.png) `#B4D4FF`|
| --action-buttons-color | Color for all the other buttons  |   - ![#B4D4FF](https://placehold.co/15x15/B4D4FF/B4D4FF.png) `#B4D4FF`|
| --action-buttons-hover-color | Hover color for all the other buttons  |  - ![#76aaf3](https://placehold.co/15x15/76aaf3/76aaf3.png) `#76aaf3` |
| --action-buttons-text-color | Text color for all the other buttons  |  - ![#0B60B0](https://placehold.co/15x15/0B60B0/0B60B0.png) `#0B60B0` |
| --action-buttons-border-color | Border color for all the other buttons  |   - ![#86B6F6](https://placehold.co/15x15/86B6F6/86B6F6.png) `#86B6F6`|
|  --input-select-border-color | Border color input and select | - ![#86B6F6](https://placehold.co/15x15/86B6F6/86B6F6.png) `#86B6F6`  |
| --select-background-color | Background color select |  - ![#white](https://placehold.co/15x15/white/white.png) `#white` |
| --select-text-color | Text color select  |  - ![#0B60B0](https://placehold.co/15x15/0B60B0/0B60B0.png) `#0B60B0` |
|  --table-border-color| Border color table  |  - ![#86B6F6](https://placehold.co/15x15/86B6F6/86B6F6.png) `#86B6F6` |

![image](https://github.com/AlexandraBledea/SE-Sem2-Framework-Design/assets/72063091/66ceb3e5-978f-4f58-a639-427ace07d5d5)


### orangeTheme
| Custom Property | Description | Default |
| ------------- | ------------- | ------------- |
| --delete-buttons-color | Color delete buttons | - ![#FC6736](https://placehold.co/15x15/FC6736/FC6736.png) `#FC6736` |
|--delete-buttons-hover-color  | Hover color delete buttons  | - ![#f58361](https://placehold.co/15x15/f58361/f58361.png) `#f58361` |
| --delete-buttons-text-color | Text color delete buttons  | - ![#FFC374](https://placehold.co/15x15/FFC374/FFC374.png) `#FFC374` |
|  --delete-buttons-border-color | Border color delete buttons  | - ![#FFC374](https://placehold.co/15x15/FFC374/FFC374.png) `#FFC374` |
| --action-buttons-color | Color for all the other buttons  | - ![#FFC374](https://placehold.co/15x15/FFC374/FFC374.png) `#FFC374` |
| --action-buttons-hover-color | Hover color for all the other buttons  |  - ![#faaa4f](https://placehold.co/15x15/faaa4f/faaa4f.png) `#faaa4f`|
| --action-buttons-text-color | Text color for all the other buttons  | - ![#FC6736](https://placehold.co/15x15/FC6736/FC6736.png) `#FC6736` |
| --action-buttons-border-color | Border color for all the other buttons  | - ![#F6995C](https://placehold.co/15x15/F6995C/F6995C.png) `#F6995C` |
|  --input-select-border-color | Border color input and select |  - ![#F6995C](https://placehold.co/15x15/F6995C/F6995C.png) `#F6995C`|
| --select-background-color | Background color select | - ![#white](https://placehold.co/15x15/white/white.png) `#white` |
| --select-text-color | Text color select  | - ![#FC6736](https://placehold.co/15x15/FC6736/FC6736.png) `#FC6736` |
|  --table-border-color| Border color table  |- ![#F6995C](https://placehold.co/15x15/F6995C/F6995C.png) `#F6995C`  |

![image](https://github.com/AlexandraBledea/SE-Sem2-Framework-Design/assets/72063091/f656435d-2bf8-4b66-8ac7-0473c4edb377)

### purpleTheme
| Custom Property | Description | Default |
| ------------- | ------------- | ------------- |
| --delete-buttons-color | Color delete buttons | - ![#492E87](https://placehold.co/15x15/492E87/492E87.png) `#492E87` |
|--delete-buttons-hover-color  | Hover color delete buttons  | - ![#5f41a8](https://placehold.co/15x15/5f41a8/5f41a8.png) `#5f41a8` |
| --delete-buttons-text-color | Text color delete buttons  |  - ![#C499F3](https://placehold.co/15x15/C499F3/C499F3.png) `#C499F3`|
|  --delete-buttons-border-color | Border color delete buttons  |  - ![#C499F3](https://placehold.co/15x15/C499F3/C499F3.png) `#C499F3`|
| --action-buttons-color | Color for all the other buttons  |  - ![#C499F3](https://placehold.co/15x15/C499F3/C499F3.png) `#C499F3`|
| --action-buttons-hover-color | Hover color for all the other buttons  |  - ![#a96ff5](https://placehold.co/15x15/a96ff5/a96ff5.png) `#a96ff5`|
| --action-buttons-text-color | Text color for all the other buttons  |  - ![#492E87](https://placehold.co/15x15/492E87/492E87.png) `#492E87`|
| --action-buttons-border-color | Border color for all the other buttons  |  - ![#8644A2](https://placehold.co/15x15/8644A2/8644A2.png) `#8644A2`|
|  --input-select-border-color | Border color input and select |- ![#8644A2](https://placehold.co/15x15/8644A2/8644A2.png) `#8644A2`  |
| --select-background-color | Background color select | - ![#white](https://placehold.co/15x15/white/white.png) `#white` |
| --select-text-color | Text color select  | - ![#492E87](https://placehold.co/15x15/492E87/492E87.png) `#492E87` |
|  --table-border-color| Border color table  | - ![#8644A2](https://placehold.co/15x15/8644A2/8644A2.png) `#8644A2` |

![image](https://github.com/AlexandraBledea/SE-Sem2-Framework-Design/assets/72063091/6265bbbb-8208-4209-acf5-1dd9461a9a73)
