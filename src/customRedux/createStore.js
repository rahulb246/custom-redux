const createStore = (reducer, preloadedState) => {
  if (typeof reducer !== "function") {
    throw new Error("Reducer must be a function");
  }

  let state = preloadedState;
  let isDispatching = false;
  const listeners = [];

  // returns current state
  const getState = () => {
    if (isDispatching) {
      throw new Error("cannot call store.getState while dispatching");
    }
    return state;
  };

  // it is used to watch store changes. Listeners are invoked whenever an action is dispatched
  const subscribe = (listener) => {
    if (typeof listener !== "function") {
      throw new Error("Store listeners should be of type function");
    }

    if (isDispatching) {
      throw new Error("Cannot call store.subscribe while dispatching");
    }

    listeners.push(listener);

    return function unsubscribe() {
      if (isDispatching) {
        throw new Error("Cannot call store.unsubscribe while dispatching");
      }

      const index = listeners.indexOf(listener);
      listeners.splice(index, 1);
    };
  };

  const dispatch = (action) => {
    if (typeof action !== "object") {
      throw new Error("An action should be a plain object");
    }

    if (typeof action.type === "undefined") {
      throw new Error("Action should have a type");
    }

    if (isDispatching) {
      throw new Error("Cannot call store.dispatch while dispatching");
    }

    isDispatching = true;

    try {
      state = reducer(state, action);
    } finally {
      isDispatching = false;
    }

    listeners.forEach((listener) => listener());

    return action;
  };

  dispatch({ type: "INIT_ACTION" });

  return {
    getState,
    subscribe,
    dispatch
  };
};

export { createStore };
