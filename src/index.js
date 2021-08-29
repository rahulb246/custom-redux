import { createStore } from "./customRedux/index";
import { players } from "./reducers/players";

const initialState = {
  data: [
    {
      id: 1,
      playerName: "Lionel Messi"
    }
  ]
};

// createStore(reducer, preloadedState, enhancer)
const store = createStore(players, initialState);
/**
 * {
 *  getState,
 *  subscribe,
 *  dispatch
 * }
 */

// to check the initial value of our store
console.log("------ INITIAL CALL ------\n", store.getState());

// to watch store changes
store.subscribe(() => {
  console.log("Listener called");
});

// to trigger store changes
store.dispatch({
  type: "ADD_PLAYER",
  payload: {
    id: 2,
    title: "Neymar Jr"
  }
});

console.log("------ SECOND CALL ------\n", store.getState());

store.dispatch({
  type: "ADD_PLAYER",
  payload: {
    id: 2,
    title: "Erling Haaland"
  }
});

console.log("------ LAST CALL ------\n", store.getState());
