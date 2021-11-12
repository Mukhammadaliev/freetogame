import { API_HOST, API_KEY } from './../../components/constants';
import { GameAction, GameActionsType } from './../../types/game';
import { Dispatch } from "react"
import axios from 'axios';


export const fetchGame = (idGame: string | undefined) => {
  return async (dispatch: Dispatch<GameAction>) => {
    try {
      dispatch({type: GameActionsType.FETCH_GAME})
      const response = await axios.get('/game', {
        baseURL: `https://${API_HOST}/api`,
        headers: {
          'x-rapidapi-key': API_KEY,
          'x-rapidapi-host': API_HOST,
        },
        params: {
          id: idGame
        }
      })
      dispatch({type: GameActionsType.FETCH_GAME_SUCCESS, payload: response.data})
    } catch (error) {
      dispatch({type: GameActionsType.FETCH_GAMSE_ERROR, payload: 'error fetch game'})
    }
  }
}