import axios, { InternalAxiosRequestConfig, type AxiosRequestConfig } from 'axios';
import momentTimezone from 'moment-timezone';

const options: AxiosRequestConfig = {
    baseURL: import.meta.env.VITE_BACKEND_API_URL,
    responseType: 'json',
};

const axiosInstance = axios.create(options);

axiosInstance.interceptors.request.use((config: InternalAxiosRequestConfig) => {
    Object.assign(config, {
        headers: {
            ...config.headers,
            'X-Timezone': momentTimezone().format('Z'),
            'X-Timezone-Name': momentTimezone.tz.guess(),
            // 'accept-language': localStorageTokenService.getLanguage(),
            'Content-Type': 'application/json',
            // Authorization: `Bearer ${authLocalStorage.getAccessToken()}`,
        },
    });
    return config;
});

export default axiosInstance;
