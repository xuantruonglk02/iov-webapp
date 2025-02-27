<script setup lang="ts">
import { useAppStore } from 'src/stores/appStore'
import { useAuthStore } from 'src/stores/authStore'
import { onBeforeMount } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import Aside from './components/Aside.vue'
import Header from './components/Header.vue'

const route = useRoute()
const router = useRouter()
const appStore = useAppStore()
const authStore = useAuthStore()

onBeforeMount(() => {
    const isPublic = route.meta?.public || false
    if (isPublic) return

    const user = authStore.user
    if (!user?.email || user?.role_name !== 'ADMIN')
        return router.push({ name: 'LoginPage', query: { redirect: route.fullPath } })
})
</script>

<template>
    <v-layout class="">
        <Header />
        <div>
            <Aside />
            <v-main>
                <router-view v-slot="{ Component }">
                    <component :is="Component" />
                </router-view>
            </v-main>
        </div>
    </v-layout>
</template>

<style scoped lang="scss">
.v-main {
    width: 100vw;
    height: 100vh;
}
</style>
