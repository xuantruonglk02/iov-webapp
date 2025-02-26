import yup from 'src/plugins/yup'
import { useField, useForm } from 'vee-validate'

const schema = yup.object({
    username: yup.string().required(),
    password: yup.string().required(),
})

export const useLoginForm = () => {
    const { handleSubmit, errors } = useForm({
        initialValues: {
            username: undefined,
            password: undefined,
        },
        validationSchema: schema,
    })
    const { value: username } = useField<string>('username')
    const { value: password } = useField<string>('password')

    const submit = handleSubmit(async (values) => {
        console.log({ values })
        return { values }
    })

    return {
        username,
        password,
        errors,
        submit,
    }
}
