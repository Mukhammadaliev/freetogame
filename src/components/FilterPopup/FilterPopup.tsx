import React, { FC, useState } from 'react'
import styles from './FilterPopup.module.css'

interface IPlatfroms {
  type: null | string;
  name: string
}

interface FilterPopupProps {
  label: string;
  options: IPlatfroms[];
  selectType: (option : null | string) => void;
  activePopup: null | string;
}

const FilterPopup: FC<FilterPopupProps> = ({options, label, selectType, activePopup}) => {


  const [visiblePopup, setVisiblePopup] = useState<boolean>(false)


  const selectVisiblePopup = () => {
    setVisiblePopup(!visiblePopup)
  }

  const selectOption = (option: null | string) => {
    selectType(option)
    setVisiblePopup(false)
  }

  return (
    <div className={styles.wrapper}>
      <div onClick={selectVisiblePopup}>
      <span className={styles.span}>{label}: </span>
      <span className={styles.span}>{activePopup === null ? `All ${label}` : activePopup}</span>
        {visiblePopup && (
          <ul className={styles.list}>
          {
            options.map(option => (
              <li className={styles.item} onClick={() => selectOption(option.type)} key={option.name}>{option.name}</li>
            ))
          }
    </ul>
      )}
      </div>
    </div>
  )
}

export default FilterPopup
