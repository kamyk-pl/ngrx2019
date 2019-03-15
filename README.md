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


### Step 6

* Implement adding a new task: 
  * Create `AddTask` action
  * Handle the action in the reducer
  * Dispatch the action in `TaskBoardComponent` in appropriate handler


### Step 7

* Use loading value from state to show/hide spinner when loading data

### Step 8

* Extend `NgrxModuleState` to have router key of type `RouterReducerState<RouterStateUrl>` - the `RouterStateUrl` was implemented for you in `store/router-store.ts`
* Import and register `routerReducer` in your present `ActionReducerMap` (suggested key: `router`)
* Wire up `StoreRouterConnectingModule.forRoot({ stateKey: 'router' })` with your module
 
### Step 9

* Use router `ROUTER_NAVIGATION` to start fetching the data
* Write selector to extract mode from url

### Step 10

* Adjust `TaskBoardComponent` component to use just observables
* Remove fetch button from step 5

### Step 11
* Adjust selectors
* Fix issue with too often calling fetch data
* Since `ROUTER_NAVIGATION` is used to load data clean initial state in`task-reducer` file
