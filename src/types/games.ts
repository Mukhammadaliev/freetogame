
export enum GamesActionsTypes {
  FETCH_GAMES = 'FETCH_GAMES',
  FETCH_GAMES_SUCCESS = 'FETCH_GAMES_SUCCESS',
  FETCH_GAMES_ERROR = 'FETCH_GAMES_ERROR',
}
interface FetchGamesAction {
  type: GamesActionsTypes.FETCH_GAMES;
}
interface FetchGamesSuccessAction {
  type: GamesActionsTypes.FETCH_GAMES_SUCCESS;
  payload: IGames[];
}
interface FetchGamesErrorAction {
  type: GamesActionsTypes.FETCH_GAMES_ERROR;
  payload: null | string;
}

export type GamesActions = FetchGamesAction | FetchGamesErrorAction | FetchGamesSuccessAction;

export interface IGamesReducer {
  games: IGames[]
  loading: boolean;
  error: null | string;
}

export interface IGames {
  title: string;
  id: number;
  short_description: string;
  genre: string;
  platform: string;
  thumbnail: string;
}
