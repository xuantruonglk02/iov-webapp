<script setup lang="ts">
import { InfoFilled } from '@element-plus/icons-vue';
import { useAppStore } from 'src/stores/appStore.ts';

const appStore = useAppStore();
</script>

<template>
  <div class="position-relative" :style="`height: ${appStore.headerHeight}px`">
    <el-header class="toolbar-ctn position-absolute w-100 z-1" :style="`height: ${appStore.headerHeight}px`">
      <el-row class="toolbar" justify="space-between" align="middle">
        <el-col>Installation</el-col>
        <el-col>
          <el-row class="toolbar-actions" align="middle">
            <el-button :icon="InfoFilled"></el-button>
            <el-button type="primary" :icon="InfoFilled">Primary</el-button>
            <el-divider direction="vertical" />
            <el-button :icon="InfoFilled" link></el-button>
          </el-row>
        </el-col>
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
    flex: none;
  }

  .toolbar-actions {
    padding: 0 8px;
  }
}
</style>
