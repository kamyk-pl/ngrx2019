import { Injectable } from '@angular/core';
import { Task, Status } from '../model/models';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TasksService {

  tasks: Task[];

  constructor() { 

    this.tasks = [
        new Task('Learn NgRx', Status.TODO),
        new Task('Learn Git', Status.DONE),
        new Task('Learn JavaScript', Status.WIP),
        new Task('Learn Angular Basics', Status.DONE),
    ]

  }

  getTasks(){
      return this.tasks;
  }

  getToDoTasks(){
    return this.tasks.filter(e=> e.status === Status.TODO);
  }

  getWiPTasks(){
    return this.tasks.filter(e=> e.status === Status.WIP);
  }

  getDoneTasks(){
    return this.tasks.filter(e=> e.status === Status.DONE);
  }
  
  addTask(task: Task){
    this.tasks.push(task);
  }

  updateStatus(task: Task, newStatus: Status){
    this.tasks.find(elem=> elem.id === task.id).status = newStatus;
  }

}
