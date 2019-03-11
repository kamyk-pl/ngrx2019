import { Component, OnInit } from '@angular/core';
import { TasksService } from '../services/tasks.service';
import { Task, Status } from '../model/models';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-tasks-board',
  templateUrl: './tasks-board.component.html',
  styleUrls: ['./tasks-board.component.scss']
})
export class TasksBoardComponent implements OnInit {

  tasks: Task[];
  mode: Status;
  title: string;
  status = Status;

  constructor(private taskService: TasksService,
              private router: Router,
              private activatedRoute: ActivatedRoute,) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe((params: Params) => {
      this.mode = params.status;
      this.getData();
    });
  }

  getData(){

    switch (this.mode) {
      case Status.TODO : {
        this.tasks = this.taskService.getToDoTasks();    
        this.title = 'Tasks ToDo';
        break;
      }
      case Status.WIP : {
        this.tasks = this.taskService.getWiPTasks();    
        this.title = 'Tasks in progress';
        break;
      }
      case Status.DONE : {
        this.tasks = this.taskService.getDoneTasks();    
        this.title = 'Tasks done';
        break;
      }
      default : {
        this.tasks = this.taskService.getTasks();    
        this.title = 'Kanban board';
        break;
      }
    
    }
  }

  onTaskStatusChange({task, newStatus}){
    this.taskService.updateStatus(task, newStatus);
    this.getData();
  }

  onNewTask(task: Task){
    this.taskService.addTask(task);
    this.getData();
  }

}
