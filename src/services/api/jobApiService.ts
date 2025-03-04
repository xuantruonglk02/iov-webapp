import axiosInstance from './axios'
import { BaseApiService } from './baseApiService'
import { IApiResponse } from './types'
import { ISearchJobsQuery, ISearchJobsResponseBody } from './types/job'

class JobApiService extends BaseApiService {
    searchJobs(query: ISearchJobsQuery) {
        return this.handler<ISearchJobsResponseBody>(
            this.client.get<ISearchJobsResponseBody, IApiResponse<ISearchJobsResponseBody>>(
                `${this.baseUrl}/search`,
                { params: query },
            ),
        )
    }
}
export const jobApiService = new JobApiService({ baseUrl: '/job' }, axiosInstance)
