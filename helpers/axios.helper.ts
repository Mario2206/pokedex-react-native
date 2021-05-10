import axios from 'axios'
import { POKE_API_URL } from '../configuration/url'

const instance = axios.create({
    baseURL: POKE_API_URL,
})

export default instance
