import { GET_CITIES } from "../actions/types";

import axios from "axios";

export const getCities = () => dispatch => {
  axios
    .get("http://localhost:5000/cities/all")
    .then(res => {
      dispatch({
        type: GET_CITIES,
        payload: res.data
      });
    })
    .catch(err => {
      console.log(err);
    });
};
