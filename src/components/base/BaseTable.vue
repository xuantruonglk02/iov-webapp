<script setup lang="ts">
interface Props {
  data: any;
  headers: {
    prop: string;
    label: string;
    width?: number;
  }[];
}
const props = defineProps<Props>();
</script>

<template>
  <el-table :data="props.data" border fit style="width: 100%">
    <el-table-column
      v-for="header in props.headers"
      :key="header.prop"
      :prop="header.prop"
      :label="header.label"
      :width="header.width"
    />
  </el-table>
</template>

<style scoped lang="scss">
:deep(.el-table__body .el-table__cell) {
  border-right: none !important;
}
</style>
