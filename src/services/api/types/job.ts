import { IApiResponseListBody } from '.'

export interface IJob {
    job_id: number
    imei_no: string
    vin_no: string
    job_status: string
    model: string
    segment_img: string
    installation_date: string
    installation_location: string

    // "after_installation_img_paths": [],
    // "device_and_sim_img_paths": [],
    // "device_status_img_paths": [],
    // "engine_no": "N04C WL22409",
    // "installation_img_paths": [],
    // "installation_type": "Reinstall",
    // "lot_no": "KS0005 (c)",
    // "manufacture_date": "2024-12-01",
    // "note": "TungHV Test",
    // "odometer_reading": "4",
    // "segment": "XZU",
    // "sim_no": null,
    // "special_equipment": null,
    // "vehicle_infor_img_paths": [],
}

export interface ISearchJobsQuery {
    page?: number
    size?: number
    search?: string
    status?: string
    from_date?: string
    to_date?: string
}

export interface ISearchJobsResponseBody extends IApiResponseListBody<'jobs', IJob[]> {}
