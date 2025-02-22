<script setup lang="ts">
import { House } from '@element-plus/icons-vue';
import { PageName } from 'src/router/routes';
import { useAppStore } from 'src/stores/appStore.ts';
import { useRouter } from 'vue-router';

const router = useRouter();
const appStore = useAppStore();

const aside = [
    {
        name: 'Home',
        icon: House,
        to: PageName.DASHBOARD_PAGE,
    },
    {
        name: 'Dashboard',
        icon: House,
        to: PageName.DASHBOARD_PAGE,
    },
    {
        name: 'Table',
        icon: House,
        to: PageName.TABLE_PAGE,
    },
    {
        name: 'Card',
        icon: House,
        to: PageName.CARDS_PAGE,
    },
    {
        name: 'Drawer',
        icon: House,
        to: PageName.DRAWER_PAGE,
    },
];
</script>

<template>
    <div
        :style="`height: calc(100vh - ${appStore.headerHeight}px); width: ${appStore.asideWidth}px`"
    >
        <el-aside class="aside-ctn position-fixed h-100 z-1" :width="`${appStore.asideWidth}px`">
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
                    <el-menu-item
                        index="index"
                        @click="router.push({ name: PageName.DASHBOARD_PAGE })"
                    >
                        <!-- <el-icon>item.icon</el-icon> -->
                        <el-icon><House /></el-icon>
                        <template #title>About</template>
                    </el-menu-item>
                    <el-menu-item
                        index="index"
                        @click="router.push({ name: PageName.DASHBOARD_PAGE })"
                    >
                        <!-- <el-icon>item.icon</el-icon> -->
                        <el-icon><House /></el-icon>
                        <template #title>App Gallery</template>
                    </el-menu-item>
                </el-menu>
            </el-scrollbar>
        </el-aside>
    </div>
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
