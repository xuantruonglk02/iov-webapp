import axios, { InternalAxiosRequestConfig, type AxiosRequestConfig } from 'axios'

const options: AxiosRequestConfig = {
    baseURL: import.meta.env.VITE_BACKEND_API_URL,
    responseType: 'json',
}

const axiosInstance = axios.create(options)
let accessToken: string | null = null

axiosInstance.interceptors.request.use((config: InternalAxiosRequestConfig) => {
    Object.assign(config, {
        headers: {
            ...config.headers,
            'Content-Type': 'application/json',
            Authorization: accessToken ? `Bearer ${accessToken}` : undefined,
        },
    })
    return config
})

export const setAxiosAccessToken = (value: string) => accessToken = value

export default axiosInstance
