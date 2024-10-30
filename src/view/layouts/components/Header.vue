<script setup lang="ts">
import HeaderNotification from './HeaderNotification.vue';
import HeaderUser from './HeaderUser.vue';
</script>

<template>
  <el-header class="header-ctn">
    <el-row class="header" justify="end" align="middle" :gutter="20">
      <el-col>
        <HeaderNotification />
      </el-col>
      <el-col>
        <HeaderUser />
      </el-col>
    </el-row>
  </el-header>
</template>

<style scoped lang="scss">
.header-ctn {
  background-color: white;
}
.header {
  height: 100%;
  margin: 0 !important;
  border-bottom: 1px solid $color-border-main;
  .el-col {
    flex: none;
  }
}
</style>
