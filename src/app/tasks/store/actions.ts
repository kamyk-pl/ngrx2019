import { Task } from '../model/models';

export const UPDATE_TASK= 'UPDATE_TASK'
export const LOAD_DATA= 'LOAD_DATA'
export const TASK_LOADED= 'TASK_LOADED'
export const NEW_TASK= 'NEW_TASK'



export class UpdateTask{
    public readonly type = UPDATE_TASK;
    constructor(public payload: Task){
    }
}

export class NewTask{
    public readonly type = NEW_TASK;
    constructor(public payload: Task){
    }
}

export class LoadData{
    public readonly type = LOAD_DATA;
}

export class TasksLoaded{
    public readonly type = TASK_LOADED;
    constructor(public payload: Task[]){
    }
}