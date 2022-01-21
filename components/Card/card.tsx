import React from 'react'
import styles from './card.module.css'

const card = () => {
  return (
    <div className={styles.card}>
      <a href="https://nextjs.org/docs">
        <h2>Documentation &rarr;</h2>
        <p>Find in-depth information about Next.js features and API.</p>
      </a>
    </div>
  )
}

export default card;
