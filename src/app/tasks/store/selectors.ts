import { createFeatureSelector, createSelector } from "@ngrx/store";
import { TasksState } from './reducers';
import { RouterScroller } from '@angular/router/src/router_scroller';
import { RouterReducerState } from '@ngrx/router-store';
import { RouterStateUrl } from './router-store';

export const selectTasks = createFeatureSelector('tasks');
export const selectTaskItems = createSelector(selectTasks, 
    (taskState: TasksState)=> taskState.items)
export const selectLoading = createSelector(selectTasks, 
        (taskState: TasksState)=> taskState.loading)

export const selectRouter = createFeatureSelector('router');
export const selectMode = createSelector(selectRouter, 
    (routerState:RouterReducerState<RouterStateUrl>) => {
        return routerState
            .state
            .params
            .status
    });      