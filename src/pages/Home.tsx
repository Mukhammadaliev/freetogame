import React, { FC } from 'react'
import GameList from '../components/GameList/GameList'

import styles from './Home.module.css'

const Home :FC = () => {



  return (
      <div className={styles.wrapper}>
        <GameList />
      </div>
  )
}

export default Home
