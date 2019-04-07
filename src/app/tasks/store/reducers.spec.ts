import { initialState, tasksReducer } from "./reducers";
import { Task, Status } from '../model/models';
import { UpdateTask } from './actions';

fdescribe('TasksReducer tests', ()=>{

    it('Inital load', ()=>{
        const stateBefore = undefined;
        const action = {type:'@ngrx/store/init'};
        const expectedState = initialState;
        const stateAfter = tasksReducer(stateBefore, action);

        expect(stateAfter).toEqual(expectedState);
    });

    it('Should update task', ()=>{
        const task = new Task('Write test', Status.TODO);
        const updatedTask = {...task, status: Status.DONE}
        const action = new UpdateTask(updatedTask);
        const initialState = {
            items : [task]
        }

         const expectedState = {
            items : [updatedTask]
        }

         const stateAfter = tasksReducer(initialState, action);
        expect(stateAfter).toEqual(expectedState);
    });

})