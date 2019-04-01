import {Action} from '@ngrx/store';
import {Task} from '../model/models';

export const UPDATE_TASK = '[Tasks] Update';
export const LOAD_TASKS = '[Tasks] Load';
export const TASKS_LOADED = '[Tasks] Loaded';
export const ADD_TASKS = '[Tasks] Add';

export class UpdateTask implements Action {
  public readonly type: string = UPDATE_TASK;

  constructor(public payload: Readonly<Task>) {
  }
}

export class LoadTasks implements Action {
  public readonly type: string = LOAD_TASKS;
}

export class TasksLoaded implements Action {
  public readonly type: string = TASKS_LOADED;

  constructor(public payload: ReadonlyArray<Task>) {
  }
}

export class AddTasks implements Action {
  public readonly type: string = ADD_TASKS;

  constructor(public payload: Readonly<Task>) {
  }
}
