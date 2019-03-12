import { TasksState, tasksReducer } from './reducers';
import { ActionReducerMap } from '@ngrx/store';

export interface NgrxModuleState{
    tasks: TasksState;
}

export const reducersMap: ActionReducerMap<NgrxModuleState> = ({
    tasks: tasksReducer
})