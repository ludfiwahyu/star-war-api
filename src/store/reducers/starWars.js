import {
  FETCH_STAR_WARS,
  FETCH_FILM_DETAIL,
  SET_LOADING,
  SET_ERROR,
} from "../actionType/starWars";

const initialState = {
  loading: false,
  error: null,
  datas: [],
  filmDetail: {},
};

export default function starWarsReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_STAR_WARS:
      return {
        ...state,
        datas: action.payload,
      };
    case FETCH_FILM_DETAIL:
      return {
        ...state,
        filmDetail: action.payload,
      };
    case SET_LOADING:
      return {
        ...state,
        loading: action.payload,
      };
    case SET_ERROR:
      return {
        ...state,
        error: action.payload,
      };

    default:
      return state;
  }
}
