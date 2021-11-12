import React, { FC } from 'react'
import styles from './AdditInfo.module.css'

interface AdditInfoProps {
  title: string;
  label: string
}

const AdditInfo: FC<AdditInfoProps> = ({title, label}) => {
  return (
      <div className={styles.wrapper}>
        <p className={styles.title}>{title}</p>
        <p className={styles.text}>{label}</p>
      </div>
  )
}

export default AdditInfo
