import { jwtDecode } from 'jwt-decode'
import yup from 'src/plugins/yup'
import { authApiService } from 'src/services/api/authApiService'
import { useField, useForm } from 'vee-validate'

const schema = yup.object({
    username: yup.string().required(),
    password: yup.string().required(),
})

export const useLoginForm = () => {
    const { handleSubmit, errors } = useForm({
        initialValues: {
            username: undefined as unknown as string,
            password: undefined as unknown as string,
        },
        validationSchema: schema,
    })
    const { value: username } = useField<string>('username')
    const { value: password } = useField<string>('password')

    const submit = handleSubmit(async (values) => {
        const { username, password } = values
        const response = await authApiService.login({ username, password })
        return {
            user: jwtDecode(response.data.access_token),
            accessToken: response.data.access_token,
        }
    })

    return {
        username,
        password,
        errors,
        submit,
    }
}
