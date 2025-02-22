<script setup lang="ts">
import BaseDrawer from 'src/components/base/BaseDrawer.vue';
import { ref } from 'vue';

const isOpeningDrawer = ref(false);
</script>

<template>
    <button @click="() => (isOpeningDrawer = !isOpeningDrawer)">Open</button>

    <BaseDrawer v-model="isOpeningDrawer" size="60%">
        <template #header-actions>
            <el-row>
                <el-button>â</el-button>
            </el-row>
        </template>
    </BaseDrawer>
</template>
