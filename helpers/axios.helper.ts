import axios from 'axios'
import { POKE_API_URL } from '../configuration/url'

export const instance = axios.create({
    baseURL: POKE_API_URL,
})
