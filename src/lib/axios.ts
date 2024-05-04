import axios from 'axios'

const $api = axios.create({
  withCredentials: true,
  baseURL: process.env.SERVER_URL,
})

$api.interceptors.request.use((config) => {
  config.headers.Authorization = `${localStorage.getItem('accesToken')}`
  return config
})

$api.interceptors.response.use(
  (config) => {
    return config
  },
  async (error) => {
    const originalRequest = error.config
    if (
      error.response.status == 401 &&
      error.config &&
      !error.config._isRetry
    ) {
      originalRequest._isRetry = true
      try {
        const response = await axios.get(
          `${process.env.SERVER_URL}/auth/refresh`,
          { withCredentials: true },
        )
        localStorage.setItem('accessToken', response.data.accessToken)
        return $api.request(originalRequest)
      } catch (error) {
        localStorage.removeItem('accessToken')
      }
    }
    throw error
  },
)
export default $api
