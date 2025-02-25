<script setup lang="ts">
import BaseDrawer from 'src/components/base/BaseDrawer.vue';
import { ref } from 'vue';

const isOpeningDrawer = ref(false);
</script>

<template>
    <button @click="() => (isOpeningDrawer = !isOpeningDrawer)">Open</button>

  <BaseDrawer v-model="isOpeningDrawer" size="60%">
    <template #header-actions>
      <v-row no-gutters justify="end">
        <v-btn>â</v-btn>
        <v-btn>â</v-btn>
      </v-row>
    </template>
  </BaseDrawer>
</template>
