<script setup lang="ts">
import { House } from '@element-plus/icons-vue'
import { useAppStore } from 'src/stores/appStore.ts'
import { useRouter } from 'vue-router'

const router = useRouter()
const appStore = useAppStore()

const aside = [
    {
        name: 'Home',
        icon: House,
        to: 'DashboardPage',
    },
    {
        name: 'Dashboard',
        icon: House,
        to: 'DashboardPage',
    },
    {
        name: 'Table',
        icon: House,
        to: 'TablePage',
    },
    {
        name: 'Card',
        icon: House,
        to: 'CardsPage',
    },
    {
        name: 'Drawer',
        icon: House,
        to: 'DrawerPage',
    },
]
</script>

<template>
    <v-navigation-drawer>
        <el-scrollbar>
            <el-menu :collapse="appStore.asideCollapsed">
                <el-menu-item
                    v-for="(item, index) in aside"
                    :key="index"
                    :index="index"
                    @click="router.push({ name: item.to })"
                >
                    <!-- <el-icon>item.icon</el-icon> -->
                    <el-icon><House /></el-icon>
                    <template #title>{{ item.name }}</template>
                </el-menu-item>
                <el-divider />
                <el-menu-item index="index" @click="router.push({ name: 'DashboardPage' })">
                    <!-- <el-icon>item.icon</el-icon> -->
                    <el-icon><House /></el-icon>
                    <template #title>About</template>
                </el-menu-item>
                <el-menu-item index="index" @click="router.push({ name: 'DashboardPage' })">
                    <!-- <el-icon>item.icon</el-icon> -->
                    <el-icon><House /></el-icon>
                    <template #title>App Gallery</template>
                </el-menu-item>
            </el-menu>
        </el-scrollbar>
    </v-navigation-drawer>
</template>

<style scoped lang="scss">
.aside-ctn {
    background-color: $color-background-content;
    border-right: 1px solid $color-border-main;
}
:deep(.el-scrollbar__view),
:deep(.el-menu) {
    height: 100%;
}
.el-menu {
    border: none;
}
</style>
