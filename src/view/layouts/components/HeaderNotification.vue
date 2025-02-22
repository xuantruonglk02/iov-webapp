<script setup lang="ts">
import { Bell } from '@element-plus/icons-vue';
</script>

<template>
    <el-dropdown trigger="click">
        <div>
            <Bell />
        </div>
        <template #dropdown>
            <el-empty description="description" />
        </template>
    </el-dropdown>
</template>
