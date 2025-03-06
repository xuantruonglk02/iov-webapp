export interface IUser {
    user_id: string
    user_name: string
    full_name: string
    email: string
    phone_number: string
    role_name: string
    gender: string
    date_of_birth: string
}

export type IGetUsersResponseBody = IUser[]
