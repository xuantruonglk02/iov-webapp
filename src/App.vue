<script setup lang="ts">
import { onBeforeMount } from 'vue'
import { useAuthStore } from './stores/authStore'

const authStore = useAuthStore()

onBeforeMount(() => {
    authStore.loadUserFromLocalStorage()
})
</script>

<template>
    <v-app>
        <router-view />
    </v-app>
</template>
