import {Task} from '../model/models';
import {Action} from '@ngrx/store';
import {UPDATE_TASK, UpdateTask, LOAD_TASKS, TASKS_LOADED, TasksLoaded, ADD_TASKS, AddTasks} from './actions';
import {ROUTER_NAVIGATION} from '@ngrx/router-store';

export interface TasksState {
  items: ReadonlyArray<Task>;
  loading: boolean;
}

export const initialTasksState = {
  items: [
  ],
  loading: false
};

export function tasksReducer(state: Readonly<TasksState> = initialTasksState, action: Action): Readonly<TasksState> {
  console.log('>>>>>', state, action);

  switch (action.type) {
    case UPDATE_TASK: {
      const {payload} = action as UpdateTask;
      const items = state.items.map(
        task => payload.id === task.id ?
          {...task, ...payload} :
          task
      );
      return {...state, items};
    }

    case ROUTER_NAVIGATION :
    case LOAD_TASKS: {
      return {...state, loading: true};
    }

    case TASKS_LOADED: {
      const {payload} = action as TasksLoaded;
      return {...state, items: payload, loading: false};

    }

    case ADD_TASKS : {
      const {payload} = action as AddTasks;
      return {...state, items: [...state.items, payload]};

    }

    default:
      return state;
  }

}
