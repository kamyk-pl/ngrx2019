import { TasksState, tasksReducer } from './reducers';
import { ActionReducerMap } from '@ngrx/store';
import { RouterReducerState, routerReducer } from '@ngrx/router-store';
import { RouterStateUrl } from './router-store';

export interface NgrxModuleState{
    tasks: TasksState,
    router: RouterReducerState<RouterStateUrl>;
}

export const reducersMap:
            ActionReducerMap<NgrxModuleState> = {
          tasks : tasksReducer,
          router: routerReducer,      
}