<script setup lang="ts">
import { House } from '@element-plus/icons-vue';
import { useAppStore } from 'src/stores/appStore.ts';

const appStore = useAppStore();
</script>

<template>
  <div :style="`height: calc(100vh - ${appStore.headerHeight}px); width: ${appStore.asideWidth}px`">
    <el-aside class="aside-ctn position-fixed h-100 z-1" :width="`${appStore.asideWidth}px`">
      <el-scrollbar>
        <el-menu :default-openeds="['1', '3']">
          <el-menu-item index="1">
            <template #title>
              <el-icon><House /></el-icon>
              <span v-if="!appStore.asideCollapsed">Home</span>
            </template>
          </el-menu-item>
          <el-menu-item index="2">
            <template #title>
              <el-icon><House /></el-icon>
              <span v-if="!appStore.asideCollapsed">Dashboard</span>
            </template>
          </el-menu-item>
          <!-- <el-sub-menu index="1">
              <template #title>
                <el-icon><House /></el-icon>Navigator One
              </template>
              <el-menu-item-group>
                <template #title>Group 1</template>
                <el-menu-item index="1-1">Option 1</el-menu-item>
                <el-menu-item index="1-2">Option 2</el-menu-item>
              </el-menu-item-group>
              <el-menu-item-group title="Group 2">
                <el-menu-item index="1-3">Option 3</el-menu-item>
              </el-menu-item-group>
              <el-sub-menu index="1-4">
                <template #title>Option4</template>
                <el-menu-item index="1-4-1">Option 4-1</el-menu-item>
              </el-sub-menu>
            </el-sub-menu>
            <el-sub-menu index="2">
              <template #title>
                <el-icon><icon-menu /></el-icon>Navigator Two
              </template>
              <el-menu-item-group>
                <template #title>Group 1</template>
                <el-menu-item index="2-1">Option 1</el-menu-item>
                <el-menu-item index="2-2">Option 2</el-menu-item>
              </el-menu-item-group>
              <el-menu-item-group title="Group 2">
                <el-menu-item index="2-3">Option 3</el-menu-item>
              </el-menu-item-group>
              <el-sub-menu index="2-4">
                <template #title>Option 4</template>
                <el-menu-item index="2-4-1">Option 4-1</el-menu-item>
              </el-sub-menu>
            </el-sub-menu>
            <el-sub-menu index="3">
              <template #title>
                <el-icon><setting /></el-icon>Navigator Three
              </template>
              <el-menu-item-group>
                <template #title>Group 1</template>
                <el-menu-item index="3-1">Option 1</el-menu-item>
                <el-menu-item index="3-2">Option 2</el-menu-item>
              </el-menu-item-group>
              <el-menu-item-group title="Group 2">
                <el-menu-item index="3-3">Option 3</el-menu-item>
              </el-menu-item-group>
              <el-sub-menu index="3-4">
                <template #title>Option 4</template>
                <el-menu-item index="3-4-1">Option 4-1</el-menu-item>
              </el-sub-menu>
            </el-sub-menu> -->
        </el-menu>
      </el-scrollbar>
    </el-aside>
  </div>
</template>

<style scoped lang="scss">
.aside-ctn {
  background-color: $color-background-content;
  border-right: 1px solid $color-border-main;
}
:deep(.el-scrollbar__view),
:deep(.el-menu) {
  height: 100%;
}
.el-menu {
  border: none;
}
</style>
