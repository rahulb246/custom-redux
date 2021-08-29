# custom-redux

Usage sample:
```javascript
// createStore(reducer, preloadedState, enhancer)
const store = createStore(reducer, initialState);
/**
 * {
 *  getState,
 *  subscribe,
 *  dispatch
 * }
 */

// to check the current state of our store
store.getState();

// to watch store changes
store.subscribe(() => {
  console.log("Listener called");
});

// to trigger store changes
store.dispatch({
  type: "ACTION_TYPE",
  payload: {
    id: 1,
    title: "..."
  }
});
```
