import { IGamesReducer } from './../../types/games';
import { GamesActions, GamesActionsTypes } from "../../types/games"


const initialState: IGamesReducer = {
  games: [],
  loading: false,
  error: null,
}

export const gamesReducer = (state = initialState, action: GamesActions): IGamesReducer => {
  switch (action.type) {
    case GamesActionsTypes.FETCH_GAMES:
      return {loading: true, error: null, games: []};
    case GamesActionsTypes.FETCH_GAMES_SUCCESS:
      return {loading: false, error: null, games: action.payload};
      case GamesActionsTypes.FETCH_GAMES_ERROR:
        return {loading: false, error: action.payload, games: []}
    default:
      return state;
  }

}