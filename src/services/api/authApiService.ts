import axiosInstance from './axios';
import { BaseApiService } from './baseApiService';

class AuthApiService extends BaseApiService {
    login() {
        return this.client.post<void, void>(`${this.baseUrl}/login`);
    }
}
export const authApiService = new AuthApiService({ baseUrl: '/auth' }, axiosInstance);
