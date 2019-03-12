import { Component, OnInit } from '@angular/core';
import { TasksService } from '../services/tasks.service';
import { Task, Status } from '../model/models';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { NgrxModuleState } from '../store';
import { Store, select } from '@ngrx/store';
import { map, tap } from 'rxjs/operators';
import { selectTaskItems } from '../store/selectors';
import { Observable } from 'rxjs';
import { UpdateTask, LoadTasks } from '../store/actions';

@Component({
  selector: 'app-tasks-board',
  templateUrl: './tasks-board.component.html',
  styleUrls: ['./tasks-board.component.scss']
})
export class TasksBoardComponent implements OnInit {

  tasks$: Observable<Task[]>;
  mode: Status;
  title: string;
  status = Status;

  constructor(private taskService: TasksService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private store$: Store<NgrxModuleState>, ) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe((params: Params) => {
      this.mode = params.status;
      this.getData();
    });
  }

  getData() {

    this.tasks$ = this.store$.pipe(
      select(selectTaskItems),
      map((taskItems: Task[]) => this.mode ? taskItems.filter(task => task.status === this.mode) : taskItems),
    );

    switch (this.mode) {
      case Status.TODO: {
        this.title = 'Tasks ToDo';
        break;
      }
      case Status.WIP: {
        this.title = 'Tasks in progress';
        break;
      }
      case Status.DONE: {
        this.title = 'Tasks done';
        break;
      }
      default: {
        this.title = 'Kanban board';
        break;
      }

    }
  }

  fetchTasks(){
    this.store$.dispatch(new LoadTasks());
  }

  onTaskStatusChange({ task, newStatus }) {
    this.store$.dispatch(new UpdateTask({
      ...task,
      status: newStatus,
    }));
  }

  onNewTask(task: Task) {
    this.taskService.addTask(task);
    this.getData();
  }

}
