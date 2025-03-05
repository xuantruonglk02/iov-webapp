<script setup lang="ts">
import { onBeforeMount, onMounted, ref } from 'vue'
import BaseNotification, { NotificationType } from './components/base/BaseNotification.vue'
import { useAuthStore } from './stores/authStore'

declare global {
    interface Document {
        notify: (type: NotificationType, message: string) => void
    }
}

const authStore = useAuthStore()

const isDisplayNotification = ref(false)
const notificationType = ref<NotificationType>('success')
const notificationMessage = ref('')

onBeforeMount(() => {
    authStore.loadUserFromLocalStorage()
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
