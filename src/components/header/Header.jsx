import React from 'react'
import css from './Header.module.css'

function Header() {
  return (
    <div className={css.header}>
      <div className={css.headerLeft}>
        <button className={css.youtubeButton}></button>
        <span>YouTube</span>
      </div>
      <div className={css.headerCenter}>
        <div className={css.borderInput}>
          <input type='text' />
          <button className={css.searchButton}></button>
        </div>
        <button className={css.microIconButton}></button>
      </div>
      <div className={css.headerRight}>
        <button className={css.addVideoButton}></button>
        <button className={css.bellButton}></button>
        <button className={css.avatarButton}></button>
      </div>
    </div>
  )
}

export default Header
