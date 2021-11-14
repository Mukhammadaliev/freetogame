import React, { FC, useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate, useParams } from 'react-router'
import AdditInfo from '../components/AdditInfo/AdditInfo'
import Spinner from '../components/Spinner/Spinner'
import { useTypeSelector } from '../hooks/useTypeSelector'
import { addFavorite, removeFavorite } from '../redux/actions/favorite'
import { fetchGame } from '../redux/actions/game'
import { IGames } from '../types/games'
import styles from './GamePage.module.css'
import addIcon from '../asseets/favorite.svg'
import removeIcon from '../asseets/favorite-fill.svg'

const GamePage: FC = () => {

  const {id} = useParams()
  const dispatch = useDispatch()
  const { game, loading, error } = useTypeSelector(state => state.gameReducer);
  const { favoriteGames } = useTypeSelector(state => state.favorite);
  const [activeFavorite, setActiveFavorite] = useState<boolean>(false);

  const idGame = Number(id)

  let history = useNavigate()

  useEffect( () => {
    dispatch(fetchGame(id))
    if(favoriteGames) {
      favoriteGames.find(gamed => idGame === gamed.id) ? setActiveFavorite(true) : setActiveFavorite(false)
    }
  }, [])

  const addFavoriteGames = (game: IGames) => {
    dispatch(addFavorite(game))
    setActiveFavorite(true)

  }
  const removeFavoriteGames = (id: number) => {
    dispatch(removeFavorite(id))
    setActiveFavorite(false)
  }




  if (error) {
    return <h3>{error}</h3>
  }
  if (loading) {
    return <Spinner />
  }
  return (
    <div className='container'>
      <button className='back-btn' onClick={() => history('/')} >back</button>
        {!error ?
          (game &&
            (<div className={styles.wrapper}>
            <img className={styles.thumbnail} src={game.thumbnail} alt="" />
            <div className={styles.info}>
              <h3 className={styles.title}>{game.title}</h3>
              <h4 className={styles.sub_title}>About {game.title}</h4>
              <p className={styles.description}>{game.short_description}</p>
              <h4 className={styles.sub_title}>Additional Information</h4>
              <div className={styles.box}>
                <AdditInfo title={"Title"} label={game.title} />
                <AdditInfo title={"Developer"} label={game.developer} />
                <AdditInfo title={"Publisher"} label={game.publisher} />
                <AdditInfo title={"Release Date"} label={game.release_date} />
                <AdditInfo title={"Genre"} label={game.genre} />
                <AdditInfo title={"Platform"} label={game.platform} />
              </div>
              <h4 className={styles.sub_title}>{game.title} Screenshots</h4>
              <div className={styles.img_wrapper}>
                {game.screenshots &&
                  (game.screenshots.map(img => <img className={styles.img} key={img.id} src={img.image} alt="" />))
                }
              </div>
              <div >
                <h4 className={styles.sub_title}>Minimum System Requirements</h4>
                {game.minimum_system_requirements &&
                  <div className={styles.box}>
                    <AdditInfo title={"OS"} label={game.minimum_system_requirements.os} />
                    <AdditInfo title={"Processor"} label={game.minimum_system_requirements.processor} />
                    <AdditInfo title={"Memory"} label={game.minimum_system_requirements.memory} />
                    <AdditInfo title={"Graphics"} label={game.minimum_system_requirements.graphics} />
                    <AdditInfo title={"Storage"} label={game.minimum_system_requirements.storage} />
                  </div>
                }
              </div>
            </div>
            <div className={styles.favorite}>
              {activeFavorite ? <button className={styles.favirote_remove} onClick={() => removeFavoriteGames(game.id)}>
                <img src={removeIcon} alt="" />
              </button> :
              <button className={styles.favorite_add} onClick={() => addFavoriteGames(game)}>
                <img src={addIcon} alt="" />
              </button>}
            </div>
          </div>)
            )  : <h3>errrr</h3>
        }
        <div>
    </div>
    </div>
  )
}

export default GamePage
