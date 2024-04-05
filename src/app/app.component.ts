import {AfterViewInit, Component, ElementRef} from '@angular/core';
import './lit/ClockComponent.js';
import './lit/ClockComponentCustomizable.js';
import './lit/CustomButton.js'
import './lit/TodoListComponent.js'

interface Task{
  name: String,
  category: String,
  completed: Boolean
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit{

  tasks: Task[] = [{name: 'Create Notification Component', category: 'School', completed: false}, {name: 'Create Timer Component', category: 'School', completed: true}]
  categories: String[] = ['School', 'Personal', 'Work', 'Shopping']

  constructor(private el: ElementRef) {}

  ngAfterViewInit() {
    const todoListElement = this.el.nativeElement.querySelector('todo-list-component');
    if (todoListElement) {
      todoListElement.tasks = this.tasks;
      todoListElement.categories = this.categories;
      todoListElement.theme="pinkTheme";

      // Listen for tasks changes
      todoListElement.addEventListener('tasks-changed', (event: any) => {
        this.tasks = event.detail.tasks;
      });

      // Listen for categories changes
      todoListElement.addEventListener('categories-changed', (event: any) => {
        this.categories = event.detail.categories;
      });
    }
  }

}
