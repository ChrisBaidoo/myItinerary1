import { GET_ITINERARIES } from "../actions/types";
import Itinerary from "../../components/Itinerary";

const initialState = {
  itineraries: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_ITINERARIES:
      return {
        ...state,
        itineraries: action.payload
      };

    default:
      return state;
  }
}
