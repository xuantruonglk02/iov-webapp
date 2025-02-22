<script setup lang="ts">
import { useAppStore } from 'src/stores/appStore';
import Aside from './components/Aside.vue';
import Header from './components/Header.vue';

const appStore = useAppStore();
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
