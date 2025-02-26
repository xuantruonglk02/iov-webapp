import type { AxiosError, AxiosInstance } from 'axios'
import { IApiResponse, IApiResponseBody } from './types'

interface IServiceOption {
    baseUrl: string
}

export class BaseApiService {
    client: AxiosInstance
    baseUrl: string

    constructor(params: IServiceOption, axios: AxiosInstance) {
        this.client = axios
        this.baseUrl = params.baseUrl
    }

    handler<T>(api: Promise<IApiResponse<T>>): Promise<IApiResponseBody<T>> {
        return new Promise(async (resolve, reject) => {
            api.then((response) => resolve(response.data)).catch((error: AxiosError) =>
                reject(error.response?.data || new Error(error.message)),
            )
        })
    }
}
