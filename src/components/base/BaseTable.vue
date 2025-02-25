<script setup lang="ts">
interface Props {
  data: any;
}
const props = defineProps<Props>();
</script>

<template>
  <v-data-table :items="data" hover></v-data-table>
</template>

<style scoped lang="scss"></style>
