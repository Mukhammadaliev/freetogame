import axios from "axios"
import { Dispatch } from "react"
import { API_HOST, API_KEY } from "../../components/constants"
import { GamesActions, GamesActionsTypes } from "../../types/games"




export const fetchGames = (platform: null | string, genre: null | string, sortBy:  null | string) => {
  return async (dispatch: Dispatch<GamesActions>) => {
    try {
      dispatch({type: GamesActionsTypes.FETCH_GAMES})
      const response = await axios.get('/games', {
        baseURL: `https://${API_HOST}/api`,
        headers: {
          'x-rapidapi-key': API_KEY,
          'x-rapidapi-host': API_HOST,
        },
        params: {
					platform,
					category: genre,
					'sort-by': sortBy,
				},
      })

      dispatch({type: GamesActionsTypes.FETCH_GAMES_SUCCESS, payload: response.data})
    } catch (error) {
      dispatch({type: GamesActionsTypes.FETCH_GAMES_ERROR, payload: 'fetch games error'})
    }
  }
}