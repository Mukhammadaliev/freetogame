


export enum GameActionsType {
  FETCH_GAME = 'FETCH_GAME',
  FETCH_GAME_SUCCESS = 'FETCH_GAME_SUCCES',
  FETCH_GAMSE_ERROR = 'FETCH_GAMSE_ERROR'
}
interface FetchGameAction {
  type: GameActionsType.FETCH_GAME
}
interface FetchGameSuccessAction {
  type: GameActionsType.FETCH_GAME_SUCCESS;
  payload: IGame;
}

interface FetchGameerrorAction {
  type: GameActionsType.FETCH_GAMSE_ERROR;
  payload: null | string;
}

export type GameAction = FetchGameAction | FetchGameSuccessAction | FetchGameerrorAction;

export interface IGameType {
  loading: boolean;
  error: null | string;
  game: null | IGame
}

interface IGame {
  id: number;
  title: string;
  short_description: string;
  thumbnail: string;
  genre: string;
  platform: string;
  publisher: string;
  developer: string;
  release_date: string;
  minimum_system_requirements: IMinimumSystem;
  screenshots: IScreenshots[];
}
interface IMinimumSystem {
  os: string;
  processor: string;
  memory: string;
  graphics: string;
  storage: string;
}
interface IScreenshots {
  id: number;
  image: string;
}