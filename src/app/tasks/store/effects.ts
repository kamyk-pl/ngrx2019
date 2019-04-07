import { Injectable } from "@angular/core";
import { Actions, Effect, ofType } from '@ngrx/effects';
import { TasksService } from '../services/tasks.service';
import { Observable } from 'rxjs';
import { Action } from '@ngrx/store';
import { LOAD_DATA, TasksLoaded } from './actions';
import { exhaustMap, map } from 'rxjs/operators';
import { ROUTER_NAVIGATION } from '@ngrx/router-store';

@Injectable()
export class TasksEffects {

    constructor(private actions$: Actions,
        private taskSvc: TasksService) { }

    @Effect()
    fetchTasks$: Observable<Action> = this.actions$.pipe(
        ofType(LOAD_DATA, ROUTER_NAVIGATION ),
        exhaustMap(() => this.taskSvc.fetchTasks()),
        map(tasks => new TasksLoaded(tasks)),
    );
}