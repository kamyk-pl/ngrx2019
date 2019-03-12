import { Status, Task } from '../model/models';
import { Action } from '@ngrx/store';
import { UPDATE_TASK, UpdateTask } from './actions';

export interface TasksState {
   items: ReadonlyArray<Task>;
}

export const initialTasksState = {
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
  switch (action.type) {
    case UPDATE_TASK: {
      const { payload } = action as UpdateTask;
      const items = state.items.map(
        task => payload.id === task.id ?
          { ...task, ...payload } :
          task
      );
      return { ...state, items };
    }
    default:
      return state;
  }

  return state;
}
