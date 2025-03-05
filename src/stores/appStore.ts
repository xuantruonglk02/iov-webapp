import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useAppStore = defineStore('app', () => {
    const isAsideCollapsed = ref(false)

    const toggleAsideButton = () => {
        isAsideCollapsed.value = !isAsideCollapsed.value
    }

    return {
        isAsideCollapsed,
        toggleAsideButton,
    }
})
