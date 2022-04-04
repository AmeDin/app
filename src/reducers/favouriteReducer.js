import { ADD_FAVOURITE, LOADING, DELETE_FAVOURITE } from "./types";

const initialState = {
  favourites: [],
  loading: false,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case ADD_FAVOURITE:
      return {
        ...state,
        favourites: [action.payload, ...state.sentences],
      };
    case LOADING:
      return {
        ...state,
        loading: true,
      };
    case DELETE_FAVOURITE:
      return {
        ...state,
      };
    default:
      return state;
  }
}
