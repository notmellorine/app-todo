import { Component } from '@angular/core';

//Interface
import { TaskList } from '../../model/task-list';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent {

  public taskList: Array<TaskList> = [
    {
      task: "Minha nova task...",
      checked: true
    },
    {
      task: "Minha nova task 2...",
      checked: true
    }
  ]
}
