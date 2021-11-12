import { IFilterType, FilterActionsType, FilterActions } from './../../types/filter';


const initiaalState: IFilterType = {
  genre: null,
  platform: null,
  sortBy: "Relevance",
}

export const filterReducer = (state = initiaalState, action : FilterActions) : IFilterType => {
  switch (action.type) {
    case FilterActionsType.SET_GENRE:
      return {...state, genre: action.payload};
    case FilterActionsType.SET_PLATFORM:
      return {...state, platform: action.payload};
    case FilterActionsType.SET_SORT_BY:
      return {...state, sortBy: action.payload};
    default:
      return state;
  }
}