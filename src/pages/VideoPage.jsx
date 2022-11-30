import React from 'react'
import VideoCard from '../components/video/VideoCard'

function VideoPage(item) {
  return <VideoCard id={item.id} key={item.id} text={item.title} img={item.imgUrl} />
}

export default VideoPage
