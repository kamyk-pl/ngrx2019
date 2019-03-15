import { createFeatureSelector, createSelector } from '@ngrx/store';
import { TasksState } from './reducers';
import { Task } from '../model/models';
import { RouterReducerState } from '@ngrx/router-store';
import { RouterStateUrl } from './router-store';
import get from 'lodash/get';

export const selectTaskState = createFeatureSelector('tasks');
export const selectTaskItems = createSelector( selectTaskState, (tasksState: TasksState): ReadonlyArray<Task> => tasksState.items);
export const selectLoadingState = createSelector( selectTaskState, (tasksState: TasksState): boolean => tasksState.loading);

export const selectRouterState = createFeatureSelector('router');
export const selectStatus = createSelector( selectRouterState, (router: RouterReducerState<RouterStateUrl>) => {
    return get(router, 'state.params.status');
  });
