import {Component, Output, EventEmitter} from '@angular/core';
import {Status, Task} from '../model/models';

@Component({
  selector: 'app-tasks-form',
  templateUrl: './tasks-form.component.html',
  styleUrls: ['./tasks-form.component.scss']
})
export class TasksFormComponent {

  @Output()
  newTask = new EventEmitter<Task>();

  createTask(title: HTMLInputElement) {
    this.newTask.next(new Task(title.value, Status.TODO));
    title.value = '';
  }

}
