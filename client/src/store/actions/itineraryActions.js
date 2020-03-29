import { GET_ITINERARIES } from "../actions/types";

import axios from "axios";

export const getItineraries = () => dispatch => {
  axios
    .get("http://localhost:5000/itineraries/all")
    .then(res => {
      dispatch({
        type: GET_ITINERARIES,
        payload: res.data
      });
    })
    .catch(err => {
      console.log(err);
    });
};
