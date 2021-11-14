import React, { FC, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useTypeSelector } from '../../hooks/useTypeSelector'
import { fetchGames } from '../../redux/actions/games'
import GameItem from '../GameItem/GameItem'
import Spinner from '../Spinner/Spinner'
import styles from './GameList.module.css'



const GameList: FC = () => {

  const dispatch = useDispatch()
  const {games, loading} = useTypeSelector(state => state.games)
  const {platform, genre, sortBy} = useTypeSelector(state => state.filter)


  useEffect( () => {
    dispatch(fetchGames(platform, genre, sortBy))
  }, [platform, genre, sortBy])

  if (loading) {
    return <Spinner />
  }


  return (
    <div className="container">
      <div className={styles.wrapper}>
      <ul className={styles.list}>
        {games.length ?
          (games.map(game => (
            <GameItem key={game.title} game={game} />
          ))) : <h3 className={styles.title}>No games found</h3>
        }
      </ul>

    </div>
    </div>
  )
}

export default GameList
