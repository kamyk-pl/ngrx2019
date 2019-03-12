import { Injectable } from '@angular/core';
import { Task, Status } from '../model/models';
import { timer } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TasksService {

  tasks: Task[];

  constructor() {

    this.tasks = [
        new Task('Learn NgRx 2', Status.TODO),
        new Task('Learn Git 2', Status.DONE),
        new Task('Learn JavaScript 2', Status.WIP),
        new Task('Learn Angular Basics 2', Status.DONE),
    ];
  }

  fetchTask() {
    return timer(3000).pipe(map(() => this.tasks));
  }

  addTask(task: Task) {
    this.tasks.push(task);
  }

  updateStatus(task: Task, newStatus: Status) {
    this.tasks.find(elem => elem.id === task.id).status = newStatus;
  }

}
