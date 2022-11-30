import React from 'react'
import css from './VideoCard.module.css'
import { useSelector } from 'react-redux'

function VideoCard() {
  const { data } = useSelector(state => state.video)
  console.log(data)
  return (
    <div className={css.VideoCard}>
      <video>{data}</video>
      <img
        src={
          'https://trello.com/1/cards/637447b822113f004a65031d/attachments/637447bdaa07e602dfa8cadc/previews/637447beaa07e602dfa8cafb/download/image.png '
        }
        alt=' '
      />
      <div className='video_info'>
        <div className='video-text'></div>
      </div>
    </div>
  )
}

export default VideoCard
