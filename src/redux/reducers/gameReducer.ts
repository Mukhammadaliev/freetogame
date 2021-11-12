import { IGameType, GameAction, GameActionsType } from './../../types/game';

const initialState: IGameType = {
  loading: false,
  game: null,
  error: null,
}

export const gameReducer = (state = initialState, action : GameAction) : IGameType => {
  switch (action.type) {
    case GameActionsType.FETCH_GAME:
      return {loading: true, error: null, game: null};
    case GameActionsType.FETCH_GAME_SUCCESS:
      return {loading: false, error: null, game: action.payload};
      case GameActionsType.FETCH_GAMSE_ERROR:
        return {loading: false, error: action.payload, game: null};
    default:
    return state;
  }
}