<script setup lang="ts">
import { Search } from '@element-plus/icons-vue';
</script>

<template>
    <el-input
        size="large"
        placeholder="Search Installation"
        :prefix-icon="Search"
        class="header-search-input"
    />
</template>

<style scoped lang="scss">
.header-search-input {
    :deep(.el-input__wrapper) {
        background-color: $color-background-main;
        border-radius: 8px;
        box-shadow: none;
    }
}
</style>
