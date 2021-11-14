import React, { FC } from 'react'
import { Link } from 'react-router-dom'
import logo from '../../asseets/logo.png'
import FilterPopup from '../FilterPopup/FilterPopup'
import { useDispatch } from 'react-redux'
import { useTypeSelector } from '../../hooks/useTypeSelector'
import { setGenre, setPlatform, setSortBy } from '../../redux/actions/filter'
import styles from './Header.module.css'
import {genres, sortsBy, platforms} from './constants'
import bookmark from '../../asseets/bookmark.png'

const Header: FC = () => {
  const dispatch = useDispatch()
  const {genre, platform, sortBy} = useTypeSelector(state => state.filter)


  const selectPlarform = (platformType : null | string) => {
    dispatch(setPlatform(platformType))
  }
  const selectGenre = (genreType : null | string) => {
    dispatch(setGenre(genreType))
  }
  const selectSortBy = (sortBy: null | string) => {
    dispatch(setSortBy(sortBy))
  }

  return (
    <header className={styles.header}>
      <div className='container'>
        <div className={styles.wrapper}>
          <Link to='/' className={styles.logo}>
            <img src={logo} alt="" />
          </Link>
          <FilterPopup activePopup={platform} selectType={selectPlarform} options={platforms} label={'Platforms'} />
          <FilterPopup activePopup={genre} selectType={selectGenre} options={genres} label={'Genres'} />
          <FilterPopup activePopup={sortBy} selectType={selectSortBy} options={sortsBy} label={'Sort By'} />
          <Link className={styles.favorite_page} to='/favorite'>
            <img src={bookmark} alt="" />
          </Link>
        </div>
      </div>
    </header>
  )
}

export default Header
