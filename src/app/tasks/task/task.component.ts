import {Component, Input, Output, EventEmitter} from '@angular/core';
import {Task, Status} from '../model/models';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent {

  @Input()
  task: Task;

  @Output()
  changeStatus = new EventEmitter<{ task: Task, newStatus: Status }>();


  isNotToDo(): boolean {
    return this.isNot(Status.TODO);
  }

  isNotWiP(): boolean {
    return this.isNot(Status.WIP);
  }

  isNotDone(): boolean {
    return this.isNot(Status.DONE);
  }

  moveToToDo() {
    this.moveTo(Status.TODO);
  }

  moveToWiP() {
    this.moveTo(Status.WIP);
  }

  moveToDone() {
    this.moveTo(Status.DONE);
  }

  private moveTo(status: Status) {
    this.changeStatus.next({task: this.task, newStatus: status});
  }


  private isNot(status: Status): boolean {
    return this.task.status !== status;
  }
}
