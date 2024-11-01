<script setup lang="ts">
import { useAppStore } from 'src/stores/appStore';
import Aside from './components/Aside.vue';
import Header from './components/Header.vue';
import Toolbar from 'src/view/layouts/components/Toolbar.vue';

const appStore = useAppStore();
</script>

<template>
  <el-container class="container-root flex-column">
    <Header />
    <el-container>
      <Aside />
      <el-row class="container-main" :style="`width: calc(100% - ${appStore.asideWidth}px)`">
        <el-col class="container-col">
          <Toolbar />
          <el-main>
            <router-view v-slot="{ Component }">
              <component :is="Component" />
            </router-view>
          </el-main>
        </el-col>
<!--        <el-col class="container-col">-->
<!--          <Toolbar />-->
<!--          <el-main>-->
<!--            <router-view v-slot="{ Component }">-->
<!--              <component :is="Component" />-->
<!--            </router-view>-->
<!--          </el-main>-->
<!--        </el-col>-->
      </el-row>
    </el-container>
  </el-container>
</template>

<style scoped lang="scss">
.container-root {
  background-color: $color-background-content;
  padding: 0 6px;
}

.container-main {
  background-color: $color-background-main;

  &>.container-col {
    width: 100%;
    flex: 1;
    border-right: 1px solid $color-border-main;
  }

  &>.container-col:last-of-type {
    border-right: none !important;
  }
}
</style>