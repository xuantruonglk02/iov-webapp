<script setup lang="ts">
import BaseSaleCard from 'src/components/base/BaseSaleCard.vue';

const data = [
  {},
  {},
]
</script>

<template>
  <el-row :gutter="20">
    <el-col v-for="(card, index) in data" :key="index">
      <BaseSaleCard />
    </el-col>
  </el-row>
</template>

<style scoped lang="scss">
.el-col {
  flex: 0;
  padding-bottom: 20px;
}
</style>