import { GET_RESALES, LOADING } from "../actions/types";

const initialState = {
  resales: [],
  loading: false,
};

export default function resaleFunction(state = initialState, action) {
  console.log(action);
  switch (action.type) {
    case GET_RESALES:
      console.log(action.payload.data.result);
      return {
        ...state,
        resales: action.payload.data.result.records,
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
