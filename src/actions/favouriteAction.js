import { ADD_FAVOURITE, LOADING, DELETE_FAVOURITE } from "./types";
import { returnErrors } from "./errorActions";
import axios from "axios";

export const addFavourite  (fav) => (dispatch, getState) => {
    console.log("addFavourite")
    var formData = new FormData();
    formData.set("email", fav.email);
    formData.set("resale_flat_id", fav.resale_flat_id);
    axios
        .post('/api/favourite', formData, { headers: {
            'Content-Type': 'multipart/form-data'
        }},  tokenConfig(getState))
        .then(res => 
            dispatch({
                type: ADD_FAVOURITE,
                payload: res.data
            })
        )
        .catch(err =>
            dispatch(returnErrors(err.response.data, err.response.status))
        );
}
export const deleteFavourite = (data) => (dispatch) => {
    console.log("deleteFavourite");
    // TODO
};

