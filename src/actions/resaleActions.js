import { GET_RESALES, LOADING } from "./types";
import { returnErrors } from "./errorActions";
import axios from "axios";

export const getResales = () => (dispatch) => {
  console.log("getResales");
  dispatch(setResalesLoading());
  axios
    .get("/api/resale/all")
    .then((res) =>
      dispatch({
        type: GET_RESALES,
        payload: res.data,
      })
    )
    .catch((err) =>
      dispatch(returnErrors(err.response.data, err.response.status))
    );
};

export const getResalesByType = (type) => (dispatch) => {
  console.log("getResales");
  dispatch(setResalesLoading());
  axios
    .get("/api/resale/" + type)
    .then((res) =>
      dispatch({
        type: GET_RESALES,
        payload: res.data,
      })
    )
    .catch((err) =>
      dispatch(returnErrors(err.response.data, err.response.status))
    );
};

export const setResalesLoading = () => {
  return {
    type: LOADING,
  };
};
