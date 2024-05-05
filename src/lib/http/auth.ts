import axios from 'axios'

const $auth = axios.create({
  withCredentials: true,
  baseURL: process.env.NEXT_PUBLIC_SERVER_URL,
})

export default $auth
