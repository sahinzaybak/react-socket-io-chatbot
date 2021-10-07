const initialState = {
  userList: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_USER_LIST":
      return {
        ...state,
        userList: action.payload,
      };
    default:
      return state;
  }
};
