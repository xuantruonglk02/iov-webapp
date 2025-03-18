import yup from 'src/plugins/yup'
import { useField, useForm } from 'vee-validate'

const schema = yup.object({
    installation_type: yup.string().required(),
    note: yup.string().optional(),
    installation_date: yup.date().required(),
    installation_location: yup.string().required(),
    model: yup.string().required(),
    engine_no: yup.string().required(),
    odometer_reading: yup.number().required(),
    sim_no: yup.string().required(),
    imei_no: yup.string().required(),
    vin_no: yup.string().required(),
    lot_no: yup.string().required(),
    vehicle_infor_img_paths: yup.array().of(yup.string().required()).optional(),
    device_and_sim_img_paths: yup.array().of(yup.string().required()).optional(),
    installation_img_paths: yup.array().of(yup.string().required()).optional(),
    after_installation_img_paths: yup.array().of(yup.string().required()).optional(),
    device_status_img_paths: yup.array().of(yup.string().required()).optional(),
})

export const useCreateJobForm = () => {
    const { handleSubmit, handleReset, errors } = useForm({
        initialValues: {
            installation_type: undefined as unknown as string,
            note: undefined as unknown as string,
            installation_date: undefined as unknown as string,
            installation_location: undefined as unknown as string,
            model: undefined as unknown as string,
            engine_no: undefined as unknown as string,
            odometer_reading: undefined as unknown as string,
            sim_no: undefined as unknown as string,
            imei_no: undefined as unknown as string,
            vin_no: undefined as unknown as string,
            lot_no: undefined as unknown as string,
            vehicle_infor_img_paths: [],
            device_and_sim_img_paths: [],
            installation_img_paths: [],
            after_installation_img_paths: [],
            device_status_img_paths: [],
        },
        validationSchema: schema,
    })
    const { value: installation_type } = useField<string>('installation_type')
    const { value: note } = useField<string>('note')
    const { value: installation_date } = useField<Date>('installation_date')
    const { value: installation_location } = useField<string>('installation_location')
    const { value: model } = useField<string>('model')
    const { value: engine_no } = useField<string>('engine_no')
    const { value: odometer_reading } = useField<number>('odometer_reading')
    const { value: sim_no } = useField<string>('sim_no')
    const { value: imei_no } = useField<string>('imei_no')
    const { value: vin_no } = useField<string>('vin_no')
    const { value: lot_no } = useField<string>('lot_no')
    const { value: vehicle_infor_img_paths } = useField<string[]>('vehicle_infor_img_paths')
    const { value: device_and_sim_img_paths } = useField<string[]>('device_and_sim_img_paths')
    const { value: installation_img_paths } = useField<string[]>('installation_img_paths')
    const { value: after_installation_img_paths } = useField<string[]>('after_installation_img_paths')
    const { value: device_status_img_paths } = useField<string[]>('device_status_img_paths')

    const submit = handleSubmit(async (values) => {
        return values
    })

    return {
        installation_type,
        note,
        installation_date,
        installation_location,
        model,
        engine_no,
        odometer_reading,
        sim_no,
        imei_no,
        vin_no,
        lot_no,
        vehicle_infor_img_paths,
        device_and_sim_img_paths,
        installation_img_paths,
        after_installation_img_paths,
        device_status_img_paths,
        errors,
        submit,
        handleReset,
    }
}
