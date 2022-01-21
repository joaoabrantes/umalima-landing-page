import React from 'react'
import styles from '../styles/projects.module.css'

import Card from '../components/Card/card'

export const Projects = () => {
  return (
    <div className={styles.grid}>
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
    </div>
  )
}
