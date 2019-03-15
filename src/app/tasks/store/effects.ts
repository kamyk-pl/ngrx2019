import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { TasksService } from '../services/tasks.service';
import { LOAD_TASKS, TasksLoaded } from './actions';
import { Observable } from 'rxjs';
import { exhaustMap, map } from 'rxjs/operators';
import { ROUTER_NAVIGATION } from '@ngrx/router-store';

@Injectable()
export class TasksEffects {
    constructor(private actions$: Actions,
                private taskSvc: TasksService) { }

    @Effect()
    fetchTasks$: Observable<Action> = this.actions$.pipe(
        ofType(LOAD_TASKS, ROUTER_NAVIGATION),
        exhaustMap(() => this.taskSvc.fetchTask()),
        map(tasks => new TasksLoaded(tasks)),
    );
}
