import { initialTasksState, tasksReducer } from "./reducers";

describe('Task reducer', () => {
    it('should default to initial state', () => {
      const stateBefore = undefined;
      const action = { type: '@ngrx/store/init' };
      const expectedState = initialTasksState;
      const stateAfter = tasksReducer(stateBefore, action);
      expect(stateAfter).toEqual(expectedState);
    });
  });