import {
  FETCH_STAR_WARS,
  FETCH_FILM_DETAIL,
  SET_LOADING,
  SET_ERROR,
} from "../actionType/starWars";
import axios from "axios";

export const fetchStarWars = () => {
  return async (dispatch) => {
    try {
      dispatch({
        type: SET_LOADING,
        payload: true,
      });
      const response = await axios({
        method: "get",
        url: "https://swapi.dev/api/people",
      });
      dispatch({
        type: FETCH_STAR_WARS,
        payload: response.data.results,
      });
    } catch (error) {
      dispatch({
        type: SET_ERROR,
        payload: error.message,
      });
    } finally {
      dispatch({
        type: SET_LOADING,
        payload: false,
      });
    }
  };
};

export const fetchFilmDetail = (payload) => {
  return async (dispatch) => {
    try {
      dispatch({
        type: SET_LOADING,
        payload: true,
      });
      const response = await axios({
        method: "get",
        url: `https://swapi.dev/api/films/${payload}`,
      });
      dispatch({
        type: FETCH_FILM_DETAIL,
        payload: response.data,
      });
    } catch (error) {
      dispatch({
        type: SET_ERROR,
        payload: error.message,
      });
    } finally {
      dispatch({
        type: SET_LOADING,
        payload: false,
      });
    }
  }
}