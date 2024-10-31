<script setup lang="ts">
import { useAppStore } from 'src/stores/appStore.ts';

const appStore = useAppStore();
</script>

<template>
  <div class="position-relative" :style="`height: ${appStore.headerHeight}px`">
    <el-header class="toolbar-ctn position-absolute w-100 z-1" :style="`height: ${appStore.headerHeight}px`">
      <el-row class="toolbar" justify="space-between" align="middle">
        <el-col>Toolbar</el-col>
        <el-col>Hello</el-col>
      </el-row>
    </el-header>
  </div>
</template>

<style scoped lang="scss">
.toolbar-ctn {
  background-color: white;
  border-bottom: 1px solid $color-border-main;
}

.toolbar {
  height: 100%;

  .el-col {
    flex: 1;
  }
}
</style>