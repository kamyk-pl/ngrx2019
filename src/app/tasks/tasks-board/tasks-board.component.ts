import { Component, OnInit } from '@angular/core';
import { TasksService } from '../services/tasks.service';
import { Task, Status } from '../model/models';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { NgrxModuleState } from '../store';
import { Store, select } from '@ngrx/store';
import { map, withLatestFrom } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { selectTaskItems, selectLoading, selectMode } from '../store/selectors';
import { UpdateTask, LoadData, NewTask } from '../store/actions';

@Component({
  selector: 'app-tasks-board',
  templateUrl: './tasks-board.component.html',
  styleUrls: ['./tasks-board.component.scss']
})
export class TasksBoardComponent implements OnInit {

  mode$: Observable<Status> = this.store$.pipe(
    select(selectMode),
    map(status => !status? Status.ALL : status),
  );
 
  tasks$ = this.store$.pipe(
    select(selectTaskItems),
    withLatestFrom(this.mode$),
    map(([items, mode]) => !mode || mode === Status.ALL ? items : items.filter((item:Task) => item.status ===mode))
  );
  loading$: Observable<boolean> = this.store$.pipe(
    select(selectLoading)
  );
 
  title: string;
  status = Status;

  constructor(private taskService: TasksService,
              private router: Router,
              private activatedRoute: ActivatedRoute,
              private store$: Store<NgrxModuleState>) { }

  ngOnInit() {
      this.getData();
  }

  getData(){

    // switch (this.mode) {
    //   case Status.TODO : {
    //     this.title = 'Tasks ToDo';
    //     break;
    //   }
    //   case Status.WIP : {
    //     this.title = 'Tasks in progress';
    //     break;
    //   }
    //   case Status.DONE : {
    //     this.title = 'Tasks done';
    //     break;
    //   }
    //   default : {
    //     this.title = 'Kanban board';
    //     break;
    //   }
    
    //}
  }

  fetchData(){
    this.store$.dispatch(new LoadData());
  }


  onTaskStatusChange({task, newStatus}){
    this.store$.dispatch(new UpdateTask({...task, status: newStatus}));
  }

  onNewTask(task: Task){
    this.store$.dispatch(new NewTask(task));
  }

}
