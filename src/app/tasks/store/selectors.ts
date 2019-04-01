import {createFeatureSelector, createSelector} from '@ngrx/store';
import {TasksState} from './reducers';
import {Task, Status} from '../model/models';
import {RouterReducerState} from '@ngrx/router-store';
import {RouterStateUrl} from './router-store';
import get from 'lodash/get';

export const selectTaskState = createFeatureSelector('tasks');
export const selectTaskItems = createSelector(selectTaskState, (tasksState: TasksState): ReadonlyArray<Task> => tasksState.items);
export const selectLoadingState = createSelector(selectTaskState, (tasksState: TasksState): boolean => tasksState.loading);

export const selectRouterState = createFeatureSelector('router');
export const selectStatus = createSelector(selectRouterState, (router: RouterReducerState<RouterStateUrl>) => {
  const mode = get(router, 'state.params.status');
  return mode ? mode : Status.ALL;
});

export const selectTaskItemsByStatus = createSelector(selectTaskItems, selectStatus, (tasks: Task[], mode: Status): ReadonlyArray<Task> =>
  mode === Status.ALL ? tasks : tasks.filter((item) => item.status === mode)
);
