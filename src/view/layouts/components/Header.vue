<script setup lang="ts">
import HeaderNotification from './HeaderNotification.vue';
import HeaderUser from './HeaderUser.vue';
import HeaderAsideButton from './HeaderAsideButton.vue';
import HeaderSearchBar from './HeaderSearchBar.vue';
import { useAppStore } from 'src/stores/appStore.ts';

const appStore = useAppStore();
</script>

<template>
    <div class="position-relative w-100" :style="`height: ${appStore.headerHeight}px`">
        <el-header
            class="header-ctn position-absolute w-100 z-1"
            :height="`${appStore.headerHeight}px`"
        >
            <el-row class="header" justify="space-between" align="middle">
                <el-col class="header-btn-ctn">
                    <HeaderAsideButton />
                </el-col>
                <el-col :span="24">
                    <HeaderSearchBar />
                </el-col>
                <el-col>
                    <el-row align="middle" :gutter="20">
                        <el-col class="header-btn-ctn">
                            <HeaderNotification />
                        </el-col>
                        <el-col class="header-btn-ctn">
                            <HeaderUser />
                        </el-col>
                    </el-row>
                </el-col>
            </el-row>
        </el-header>
    </div>
</template>

<style scoped lang="scss">
.header-ctn {
    background-color: white;
    border-bottom: 1px solid $color-border-main;
}

.header {
    height: 100%;

    .el-col {
        flex: none;
    }
}

.header-btn-ctn {
    :deep(.el-icon),
    :deep(svg) {
        width: 24px;
        height: 24px;
    }
}
</style>
