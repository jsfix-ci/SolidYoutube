import axios from "axios";
import { API, base_url } from './Constant'

const http = axios.create({
    baseURL: base_url,
})

const Api = {
    list: () => http.list(`https://youtube.googleapis.com/youtube/v3/subscriptions?part=snippet%2CcontentDetails&mine=true&key=${API}`),
}

export default Api