<script setup lang="ts">
import { useAppStore } from 'src/stores/appStore';
import Aside from './components/Aside.vue';
import Header from './components/Header.vue';

const appStore = useAppStore();
</script>

<template>
  <el-container class="flex-column">
    <div style="width: 100%">
      <Header :height="`${appStore.headerHeight}px`" class="position-fixed w-100 z-1" />
      <div :style="`height: ${appStore.headerHeight}px`"></div>
    </div>
    <el-container>
      <div :style="`height: calc(100vh - ${appStore.headerHeight}px)`">
        <Aside
          :width="`${appStore.asideWidth}px`"
          class="position-fixed h-100 z-1"
        />
        <div :style="`width: ${appStore.asideWidth}px`"></div>
      </div>
      <el-main>
        <router-view v-slot="{ Component }">
          <component :is="Component" />
        </router-view>
      </el-main>
    </el-container>
  </el-container>
</template>
