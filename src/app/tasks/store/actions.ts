import { Action } from '@ngrx/store';
import { Task } from '../model/models';

 export const UPDATE_TASK = '[Tasks] Update';

 export class UpdateTask implements Action {
  public readonly type: string = UPDATE_TASK;
  constructor(public payload: Readonly<Task>) {}
}
