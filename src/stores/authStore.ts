import { defineStore } from 'pinia'
import { ref, Ref } from 'vue'
import { IUser } from './types'

export const useAuthStore = defineStore('auth', () => {
    const user: Ref<IUser> = ref(null as unknown as IUser)

    const setUser = (value: IUser) => {
        user.value = value
    }

    return { user, setUser }
})
