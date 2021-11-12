import { Dispatch } from "react"
import { FilterActions, FilterActionsType } from "../../types/filter"


export const setGenre = (genre: null | string) => {
  return (dispatch: Dispatch<FilterActions>) => {
  dispatch({type: FilterActionsType.SET_GENRE, payload: genre})
  }
}
export const setPlatform = (platform: null | string) => {
  return (dispatch: Dispatch<FilterActions>) => {
  dispatch({type: FilterActionsType.SET_PLATFORM, payload: platform})
  }
}
export const setSortBy = (sortBy: null | string) => {
  return (dispatch: Dispatch<FilterActions>) => {
  dispatch({type: FilterActionsType.SET_SORT_BY, payload: sortBy})
  }
}