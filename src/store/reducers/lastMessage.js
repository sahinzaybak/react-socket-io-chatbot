const initialState = {
  lastMessage: "",
};

export default (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_LAST_MESSAGE":
      return {
        ...state,
        lastMessage: action.payload,
      };
    default:
      return state;
  }
};
