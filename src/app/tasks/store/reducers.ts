import { Task, Status } from '../model/models';
import { Action } from '@ngrx/store';
import { UPDATE_TASK, UpdateTask, LOAD_DATA, TASK_LOADED, TasksLoaded, NewTask, NEW_TASK } from './actions';
import { ROUTER_NAVIGATION } from '@ngrx/router-store';

export interface TasksState {
    items: ReadonlyArray<Task>;
    loading?: boolean;
}

export const initialState: TasksState = {
    items: [
        new Task('Pick training', Status.DONE),
        new Task('Learn NgRx', Status.WIP),
        new Task('Meet collegues', Status.WIP),
        new Task('Pack bags', Status.DONE),
        new Task('Do some skiing', Status.TODO)],
    loading: false
}

export function tasksReducer  (state: Readonly<TasksState> = initialState,
     action: Action): Readonly<TasksState> {
    console.log('state: ', state, ' action: ', action);

        switch(action.type){
            case UPDATE_TASK:{
                const {payload: updatedTask, type} = action as UpdateTask;
                const newItems = state.items.map(
                    (item: Task) => item.id === updatedTask.id ?
                                     updatedTask : item
                )
                return {
                    ...state,
                    items: newItems
                }
            }
            case ROUTER_NAVIGATION :
            case LOAD_DATA:{
                return {
                    ...state,
                    loading: true
                }
            }
            case TASK_LOADED :{
                const {payload:newItems} = action as TasksLoaded;
                return{
                    ...state,
                    loading:false,
                    items: newItems
                }    
            }
            case NEW_TASK: {
                const {payload: newTask} = action as NewTask;
               return {
                   ...state,
                   items: [...state.items, newTask ]
               }     

            }
        }


    return state;
}