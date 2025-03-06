import yup from 'src/plugins/yup'
import { useField, useForm } from 'vee-validate'

const schema = yup.object({
    order: yup.string().required(),
    ticket: yup.string().required(),
})

export const useCreateJobForm = () => {
    const { handleSubmit, errors } = useForm({
        initialValues: {
            order: undefined as unknown as string,
            ticket: undefined as unknown as string,
        },
        validationSchema: schema,
    })
    const { value: order } = useField<string>('order')
    const { value: ticket } = useField<string>('ticket')

    const submit = handleSubmit(async (values) => {
        return values
    })

    return {
        order,
        ticket,
        errors,
        submit,
    }
}
