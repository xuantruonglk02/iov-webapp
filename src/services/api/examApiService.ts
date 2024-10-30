import axiosInstance from './axios';
import { BaseApiService } from './baseApiService';

class ExamApiService extends BaseApiService {
  getExamsList() {
    return this.client.post<void, void>(`${this.baseUrl}`);
  }
}
export const authApiService = new ExamApiService({ baseUrl: '/exams' }, axiosInstance);
