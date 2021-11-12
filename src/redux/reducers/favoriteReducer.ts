import { FavoriteAvtionsType, FavoriteState } from './../../types/favorite';
import { FavoriteActions } from "../../types/favorite";

const initialState: FavoriteState = {
  favoriteGames: [],
}

export const favoriteReducer = (state = initialState, action: FavoriteActions): FavoriteState => {
  switch (action.type) {
    case FavoriteAvtionsType.ADD_FAVORITE:
      return {...state, favoriteGames: [...state.favoriteGames, action.payload]};
    case FavoriteAvtionsType.REMOVE_FAVORITE:
      return {...state, favoriteGames: state.favoriteGames.filter(game => game.id !== action.payload)};
    default:
      return state;
  }
}