import { AxiosResponse } from 'axios'

export interface IApiResponseBody<T> {
    code: number
    message: string
    data: T
}

export type IApiResponseListBody<R extends string, T> = Record<R, T> & { total_records: number }

export interface IApiResponseError {
    code: number
    message: string
}

export type IApiResponse<T> = AxiosResponse<IApiResponseBody<T>>
