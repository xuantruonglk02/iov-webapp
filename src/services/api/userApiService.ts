import axiosInstance from './axios'
import { BaseApiService } from './baseApiService'
import { IApiResponse } from './types'
import { IGetUsersResponseBody } from './types/user'

class UserApiService extends BaseApiService {
    getUsers() {
        return this.handler<IGetUsersResponseBody>(
            this.client.get<IGetUsersResponseBody, IApiResponse<IGetUsersResponseBody>>(
                `${this.baseUrl}/technicians`,
            ),
        )
    }
}
export const userApiService = new UserApiService({ baseUrl: '/user' }, axiosInstance)
