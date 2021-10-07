import axios from 'axios'
export function fetchUserList() {
  return async dispatch => {
    await axios.get(`https://615e012812571a00172079f4.mockapi.io/userList`).then(value => {
      dispatch({
        type: "FETCH_USER_LIST",
        payload: value.data,
      });
    });
  };
}