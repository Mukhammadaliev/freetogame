import { IGames } from './../../types/games';
import { FavoriteAvtionsType, FavoriteActions } from './../../types/favorite';
import { Dispatch } from 'react';


export const addFavorite = (game: IGames) => {
  return (dispatch: Dispatch<FavoriteActions>) => {
    dispatch({type: FavoriteAvtionsType.ADD_FAVORITE, payload: game})
  }
}
export const removeFavorite = (id: number) => {
  return (dispatch: Dispatch<FavoriteActions>) => {
    dispatch({type: FavoriteAvtionsType.REMOVE_FAVORITE, payload: id})
  }
}