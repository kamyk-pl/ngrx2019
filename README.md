### Step 1

* Write your first reducer, _HINT_: `(State, Action) => State`
* Add initial, default state to your reducer 
* Wire up the reducer with the module using `StoreModule.forRoot` method and `ActionReducerMap`

### Step 2
* Use the store to render tasks in `TaskBoardComponent`:
  * Stop using the service in `getData`
  * Fetch all tasks from the store using `select` operator,
  * **Temporarily** subscribe to the store and assign them to the existing `tasks` field
  * Map the tasks collection to a filtered one, based on `this.mode` (if set)
  * Write a unit test for your reducer
  
_Since we're not relying on internal component state anymore, adding tasks won't work for a while._

### Step 3

* Refactor `TaskBoardComponent` to use `| async` instead of subscribing to `tasks$`
* Extract tasks selection logic to `store/selectors.ts`, use `createFeatureSelector` and `createSelector` functions,

### Step 4

* Implement `UpdateTask` action that will be dispatched when e.g. moving a task
* Handle updating a task in the reducer, use task `id` field to find proper one 
* Test the reducer (think of it as comparing _state after_ passing an action with _expected state_)
* Dispatch the update action on task move (`TaskBoardComponent`)

### Step 5

* Add `TasksService.fetchTasks` method that will return task with some delay, to emulate the HTTP request behaviour (use `timer` from `rxjs`)
* Be sure that `TasksService` returns other tasks than in the default state
* Add `LoadTask` and `TasksLoaded` actions, handle them in the reducer (add `loading: boolean` state)
* Write an effect that reloads tasks on `LoadTask` action and emits `TasksLoaded` action 
* Register the effect with `EffectsModule.forRoot`
* Add a **temporarily** fetch button to `TaskBoardComponent` that will dispatch `LoadTask` action

