import axiosInstance from './axios'
import { BaseApiService } from './baseApiService'
import { IApiResponse } from './types'
import { IJob, ISearchJobsQuery, ISearchJobsResponseBody } from './types/job'

class JobApiService extends BaseApiService {
    searchJobs(query: ISearchJobsQuery) {
        return this.handler<ISearchJobsResponseBody>(
            this.client.get<ISearchJobsResponseBody, IApiResponse<ISearchJobsResponseBody>>(
                `${this.baseUrl}/search`,
                { params: query },
            ),
        )
    }
    getJobDetail(jobId: number) {
        return this.handler<IJob>(
            this.client.get<IJob, IApiResponse<IJob>>(`${this.baseUrl}/${jobId}`),
        )
    }
    createJob(data: any) {
        return this.handler<IJob>(
            this.client.get<IJob, IApiResponse<IJob>>(`${this.baseUrl}/create`, data),
        )
    }
    deleteJobs(jobIds: number[]) {
        return this.handler<null>(
            this.client.post<null, IApiResponse<null>>(`${this.baseUrl}/delete`, {
                job_ids: jobIds,
            }),
        )
    }
}
export const jobApiService = new JobApiService({ baseUrl: '/job' }, axiosInstance)
