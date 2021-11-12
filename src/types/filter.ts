export enum FilterActionsType {
  SET_PLATFORM = 'SET_PLATFORM',
  SET_GENRE = 'SET_GENRE',
  SET_SORT_BY = 'SET_SORT_BY',
}
interface SetPlatformAction {
  type: FilterActionsType.SET_PLATFORM;
  payload: null | string;
}
interface SetGenreAction {
  type: FilterActionsType.SET_GENRE;
  payload: null | string;
}
interface SetSortByAction {
  type: FilterActionsType;
  payload: null | string;
}
export type FilterActions = SetPlatformAction | SetGenreAction | SetSortByAction;

export interface IFilterType {
  genre: null | string;
  platform: null | string;
  sortBy: null | string;
}