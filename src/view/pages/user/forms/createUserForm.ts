import yup from 'src/plugins/yup'
import { UserRole } from 'src/services/api/types/user'
import { useField, useForm } from 'vee-validate'

const schema = yup.object({
    user_name: yup.string().required(),
    full_name: yup.string().required(),
    email: yup.string().required(),
    phone_number: yup.string().required(),
    role_name: yup.string().oneOf(Object.values(UserRole)).required(),
})

export const useCreateUserForm = () => {
    const { handleSubmit, handleReset, errors } = useForm({
        initialValues: {
            user_name: undefined as unknown as string,
            full_name: undefined as unknown as string,
            email: undefined as unknown as string,
            phone_number: undefined as unknown as string,
            role_name: undefined as unknown as string,
        },
        validationSchema: schema,
    })
    const { value: user_name } = useField<string>('user_name')
    const { value: full_name } = useField<string>('full_name')
    const { value: email } = useField<string>('email')
    const { value: phone_number } = useField<string>('phone_number')
    const { value: role_name } = useField<UserRole>('role_name')

    const submit = handleSubmit(async (values) => {
        return values
    })

    return {
        user_name,
        full_name,
        email,
        phone_number,
        role_name,
        errors,
        submit,
        handleReset,
    }
}
