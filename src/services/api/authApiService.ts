import axiosInstance from './axios'
import { BaseApiService } from './baseApiService'
import { IApiResponse } from './types'
import { ILoginResponseBody } from './types/auth'

class AuthApiService extends BaseApiService {
    login({ username, password }: { username: string; password: string }) {
        return this.handler<ILoginResponseBody>(
            this.client.post<ILoginResponseBody, IApiResponse<ILoginResponseBody>>(
                `${this.baseUrl}/login`,
                { username, password },
            ),
        )
    }
}
export const authApiService = new AuthApiService({ baseUrl: '/auth' }, axiosInstance)
