<script setup lang="ts">
import { CloseBold } from '@element-plus/icons-vue';
</script>

<template>
    <el-drawer :show-close="false">
        <template #header="{ close, titleId, titleClass }">
            <el-row align="middle">
                <el-button link @click="close">
                    <el-icon class="el-icon--left"><CloseBold /></el-icon>
                </el-button>
                <span :id="titleId" :class="titleClass">This is a custom header!</span>
                <slot name="header-actions"></slot>
            </el-row>
        </template>
        <div></div>
    </el-drawer>
</template>
