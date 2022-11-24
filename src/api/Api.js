import axios from 'axios'
import { API, base_url, ChannelId } from '../constant'

const http = axios.create({
  baseURL: base_url,
})

const Api = {
  getVideo: () =>
    http.get(
      `https://www.googleapis.com/youtube/v3/search?key=${API}&channelid=${ChannelId}&part=snippet,id&order=date&maxResults=5`
    ),
}
export default Api
