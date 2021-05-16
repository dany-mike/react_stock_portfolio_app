const initialState = [
  {
    id: 0,
    username: "username",
  }
];

export const GET_USERNAME = "GET_USERNAME";

export function appReducer(state = initialState, action) {
  switch (action.type) {
    case GET_USERNAME:
      return [...state, ...action.payload];
    default:
      return state;
  }
}
