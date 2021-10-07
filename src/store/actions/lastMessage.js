
export function fetchLastMessage(lastMessage) {
  return async (dispatch) => {
    dispatch({
      type: "FETCH_LAST_MESSAGE",
      payload: lastMessage
    });
  };
}
