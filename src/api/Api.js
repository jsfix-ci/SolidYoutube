import axios from 'axios'
import { base_url } from './Constant'

const http = axios.create({
  baseURL: base_url,
})

const Api = {
  getList: () => http.list('subscriptions'),
}

export default Api
