import { defineStore } from 'pinia'
import { ref, Ref } from 'vue'
import { IUser } from './types'

export const useAuthStore = defineStore('auth', () => {
    const user: Ref<IUser> = ref(null as unknown as IUser)

    const loadUserFromLocalStorage = () => {
        const userString = localStorage.getItem('user')
        if (userString) {
            try {
                user.value = JSON.parse(userString)
            } catch (error) {
                console.log(error)
            }
        }
    }

    const setUser = (value: IUser) => {
        user.value = value
        localStorage.setItem('user', JSON.stringify(value))
    }

    return { user, loadUserFromLocalStorage, setUser }
})
