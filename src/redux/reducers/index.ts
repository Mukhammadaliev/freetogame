import { favoriteReducer } from './favoriteReducer';
import { filterReducer } from './filterReducer';
import { gamesReducer } from './gamesReducer';
import { combineReducers } from "redux";
import { gameReducer } from './gameReducer';


export const rootReducer = combineReducers({
  games: gamesReducer,
  gameReducer: gameReducer,
  filter: filterReducer,
  favorite: favoriteReducer,
})



export type RootState = ReturnType<typeof rootReducer>
