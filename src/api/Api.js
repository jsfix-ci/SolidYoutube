import axios from 'axios'
import { API, base_url } from '../constant'

const http = axios.create({
  baseURL: base_url,
})

const Api = {
  getVideo: () => http.get(`video?key=${API}`),
}
export default Api
