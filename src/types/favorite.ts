import { IGames } from "./games";

export enum FavoriteAvtionsType {
  ADD_FAVORITE = 'ADD_FAVORITE',
  REMOVE_FAVORITE = 'REMOVE_FAVORITE'
}

interface AddFavoriteAction {
  type: FavoriteAvtionsType.ADD_FAVORITE;
  payload: IGames;
}
interface RemoveFavoriteAction {
  type: FavoriteAvtionsType.REMOVE_FAVORITE;
  payload: number;
}
export type FavoriteActions = AddFavoriteAction | RemoveFavoriteAction

export interface FavoriteState {
  favoriteGames: IGames[];
}