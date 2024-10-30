import type { AxiosInstance } from 'axios';

interface IServiceOption {
  baseUrl: string;
}

export class BaseApiService {
  client: AxiosInstance;
  baseUrl: string;

  constructor(params: IServiceOption, axios: AxiosInstance) {
    this.client = axios;
    this.baseUrl = params.baseUrl;
  }
}
