import { createFeatureSelector, createSelector } from '@ngrx/store';
import { TasksState } from './reducers';
import { Task } from '../model/models';

export const selectTaskState = createFeatureSelector('tasks');
export const selectTaskItems = createSelector( selectTaskState, (tasksState: TasksState): ReadonlyArray<Task> => tasksState.items);
