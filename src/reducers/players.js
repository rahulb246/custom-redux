const PLAYERS_ACTIONS = {
  ADD_PLAYER: "ADD_PLAYER"
};

function players(state = { data: [] }, action) {
  switch (action.type) {
    case PLAYERS_ACTIONS.ADD_PLAYER:
      return {
        ...state,
        data: [...state.data, action.payload]
      };
    default:
      return state;
  }
}

export { players };
