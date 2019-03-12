import { Status, Task } from '../model/models';
import { Action } from '@ngrx/store';

export interface TasksState {
   items: ReadonlyArray<Task>;
}

const initialTasksState = {
  items: [
    new Task('Pack bag', Status.TODO),
    new Task('Do some skiing', Status.TODO),
    new Task('Learn sth', Status.WIP),
    new Task('Meet colleagues', Status.WIP),
    new Task('Pick trainings', Status.DONE),
  ]
};

export function tasksReducer(state: Readonly<TasksState> = initialTasksState, action: Action): Readonly<TasksState> {
  console.log('>>>>>', state, action);
  return state;
}
