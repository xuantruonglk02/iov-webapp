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
    <el-container class="container-root flex-column">
        <Header />
        <el-container>
            <Aside />
            <el-row class="container-main" :style="`width: calc(100% - ${appStore.asideWidth}px)`">
                <router-view v-slot="{ Component }">
                    <component :is="Component" />
                </router-view>
            </el-row>
        </el-container>
    </el-container>
</template>

<style scoped lang="scss">
.container-root {
    background-color: $color-background-content;
    padding: 0 6px;
}

.container-main {
    background-color: $color-background-main;
}
</style>
