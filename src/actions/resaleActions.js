import { GET_RESALES, LOADING } from "./types";
import { returnErrors } from "./errorActions";
import axios from "axios";

export const getResales = (data) => (dispatch) => {
  console.log("getResales");
  dispatch(setResalesLoading());
  axios
    .get(
      "https://data.gov.sg/api/action/datastore_search?resource_id=f1765b54-a209-4718-8d38-a39237f502b3&limit=" +
        data.limit +
        "&q=" +
        data.q
    )
    .then((res) =>
      dispatch({
        type: GET_RESALES,
        payload: res,
      })
    )
    .catch((err) => dispatch(returnErrors(err.response, err.response)));
};

// export const getResales = () => (dispatch) => {
//   console.log("getResales");
//   dispatch(setResalesLoading());
//   axios
//     .get("/api/resale/all")
//     .then((res) =>
//       dispatch({
//         type: GET_RESALES,
//         payload: res.data,
//       })
//     )
//     .catch((err) =>
//       dispatch(returnErrors(err.response.data, err.response.status))
//     );
// };

// export const getResalesByType = (type) => (dispatch) => {
//   console.log("getResales");
//   dispatch(setResalesLoading());
//   axios
//     .get("/api/resale/" + type)
//     .then((res) =>
//       dispatch({
//         type: GET_RESALES,
//         payload: res.data,
//       })
//     )
//     .catch((err) =>
//       dispatch(returnErrors(err.response.data, err.response.status))
//     );
// };

export const setResalesLoading = () => {
  return {
    type: LOADING,
  };
};
