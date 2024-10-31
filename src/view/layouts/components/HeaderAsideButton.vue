<script setup lang="ts">
import { InfoFilled } from '@element-plus/icons-vue';
import { useAppStore } from 'src/stores/appStore.ts';

const appStore = useAppStore();

const onClickAsideButton = () => {
  appStore.toggleAsideButton();
}
</script>

<template>
  <el-button :icon="InfoFilled" circle class="header-aside-btn" @click="onClickAsideButton" />
</template>

<style scoped lang="scss">
.header-aside-btn {
  border: none;
}
</style>
