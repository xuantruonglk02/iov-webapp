import { defineStore } from 'pinia'
import { IUser } from 'src/services/api/types/user'
import { ref, Ref } from 'vue'

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
