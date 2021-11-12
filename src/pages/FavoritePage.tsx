import React, { FC } from 'react'
import { useNavigate } from 'react-router'
import GameItem from '../components/GameItem/GameItem'
import { useTypeSelector } from '../hooks/useTypeSelector'
import styles from './FavoritePage.module.css'

const FavoritePage : FC = () => {
  const {favoriteGames} = useTypeSelector(state => state.favorite)
  console.log(favoriteGames);

  const goBack = useNavigate()
  return (
    <div className='container'>
      <button className='back-btn' onClick={() => goBack('/')}>back</button>
      <ul className={styles.list}>
      {favoriteGames &&
        (favoriteGames.length ?
      (favoriteGames.map(game => (
        <GameItem key={game.title} game={game} />
      ))) : <h3 className={styles.title}>No favorite games</h3>
        )
      }
    </ul>
    </div>
  )
}

export default FavoritePage
