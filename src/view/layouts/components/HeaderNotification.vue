<script setup lang="ts">
import { Bell } from '@element-plus/icons-vue';
</script>

<template>
  <el-dropdown trigger="click">
    <div>
      <Bell style="width: 24px; height: 24px;" />
    </div>
    <template #dropdown>
      <el-empty description="description" />
    </template>
  </el-dropdown>
</template>
