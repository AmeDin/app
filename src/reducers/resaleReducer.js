import { GET_RESALES, LOADING } from "../actions/types";

const initialState = {
  resales: [],
  loading: false,
};

export default function resaleFunction(state = initialState, action) {
  switch (action.type) {
    case GET_RESALES:
      console.log(action.payload);
      return {
        ...state,
        resales: action.payload,
        loading: false,
      };
    case LOADING:
      return {
        ...state,
        loading: true,
      };
    default:
      return state;
  }
}
