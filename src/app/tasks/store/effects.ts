import {Injectable} from '@angular/core';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {Action, Store, select} from '@ngrx/store';
import {TasksService} from '../services/tasks.service';
import {LOAD_TASKS, LoadTasks, TasksLoaded} from './actions';
import {Observable} from 'rxjs';
import {exhaustMap, map, withLatestFrom} from 'rxjs/operators';
import {ROUTER_NAVIGATION} from '@ngrx/router-store';
import {selectTaskItems} from './selectors';
import {Task} from '../model/models';
import {NgrxModuleState} from '.';

@Injectable()
export class TasksEffects {

  private tasks$: Observable<ReadonlyArray<Task>> = this.store$.pipe(select(selectTaskItems));

  constructor(private actions$: Actions,
              private taskSvc: TasksService,
              private store$: Store<NgrxModuleState>) {
  }

  @Effect()
  fetchTasks$: Observable<Action> = this.actions$.pipe(
    ofType(LOAD_TASKS),
    exhaustMap(() => this.taskSvc.fetchTask()),
    map(tasks => new TasksLoaded(tasks)),
  );


  @Effect()
  fetchTasksOnLoad$: Observable<Action> = this.actions$.pipe(
    ofType(ROUTER_NAVIGATION),
    withLatestFrom(this.tasks$),
    map(([, tasks]) => tasks.length ? new TasksLoaded(tasks) : new LoadTasks()),
  );
}
