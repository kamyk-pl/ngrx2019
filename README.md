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
