import { AxiosResponse } from 'axios'

export interface IApiResponseBody<T> {
    code: number
    message: string
    data: T
}

export interface IApiResponseError {
    code: number
    message: string
    data: null
}

export type IApiResponse<T> = AxiosResponse<IApiResponseBody<T>>
