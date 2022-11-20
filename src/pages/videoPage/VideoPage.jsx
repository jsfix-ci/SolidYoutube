import React from 'react'
import css from './VideoPage.module.css'

function VideoPage() {
  return (
    <div className={css.video}>
      <div className={css.wrapper}>
        Hello <video controls></video>
      </div>
    </div>
  )
}

export default VideoPage
