import { defineStore } from 'pinia'
import { setAxiosAccessToken } from 'src/services/api/axios'
import { IUser } from 'src/services/api/types/user'
import { ref, Ref } from 'vue'

export const useAuthStore = defineStore('auth', () => {
    const user: Ref<IUser> = ref(null as unknown as IUser)
    const accessToken: Ref<string> = ref(null as unknown as string)

    const loadUserFromLocalStorage = () => {
        const userString = localStorage.getItem('user')
        const accessTokenString = localStorage.getItem('access_token')
        if (userString && accessTokenString) {
            try {
                user.value = JSON.parse(userString)
                accessToken.value = accessTokenString
                setAxiosAccessToken(accessTokenString)
            } catch (error) {
                console.log(error)
            }
        }
    }

    const setUser = (value: IUser) => {
        user.value = value
        localStorage.setItem('user', JSON.stringify(value))
    }

    const setAccessToken = (value: string) => {
        accessToken.value = value
        setAxiosAccessToken(value)
        localStorage.setItem('access_token', value)
    }

    return { user, accessToken, loadUserFromLocalStorage, setUser, setAccessToken }
})
