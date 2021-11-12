import React, { FC } from 'react'
import { IGames } from '../../types/games';
import styles from './GameItem.module.css'
import { Link } from 'react-router-dom';

interface GameItemProps {
  game: IGames;
}


const GameItem: FC<GameItemProps> = ({game}) => {





  return (
        <li className={styles.item} id={`${game.id}`} key={game.title}>
          <Link className={styles.link} to={`/game/${game.id}`}>
            <img className={styles.img} src={game.thumbnail} alt="" />
            <div className={styles.wrapper}>
            <h3 className={styles.title}>{game.title}</h3>
            <p className={styles.short}>{game.short_description}</p>
            <div className={styles.box}>
              <p className={styles.genre}>{game.genre}</p>
            </div>
            <p className={styles.platform}>{game.platform}</p>
          </div>
          </Link>
        </li>
  )
}

export default GameItem;
