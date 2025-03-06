<script setup lang="ts">
import { onBeforeMount, onMounted, ref } from 'vue'
import { useRouter } from 'vue-router'
import { useAuthStore } from './stores/authStore'
import BaseNotification, { NotificationType } from './view/components/base/BaseNotification.vue'

declare global {
    interface Document {
        notify: (type: NotificationType, message: string) => void
    }
}

const router = useRouter()
const authStore = useAuthStore()

const isDisplayNotification = ref(false)
const notificationType = ref<NotificationType>('success')
const notificationMessage = ref('')

onBeforeMount(() => {
    authStore.loadUserFromLocalStorage()

    const tokenExp = (authStore.user as any).exp
    if (Date.now() >= tokenExp * 1000) router.push({ name: 'LoginPage' })
})

onMounted(() => {
    document.notify = (type: NotificationType, message: string) => {
        notificationType.value = type
        notificationMessage.value = message
        isDisplayNotification.value = true
    }
})
</script>

<template>
    <v-app>
        <router-view />

        <BaseNotification
            v-model="isDisplayNotification"
            :type="notificationType"
            :message="notificationMessage"
        />
    </v-app>
</template>
