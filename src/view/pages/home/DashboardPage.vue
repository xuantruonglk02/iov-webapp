<script setup lang="ts">
import BaseToolbar from 'src/components/base/BaseToolbar.vue';
import MainLayoutPageColumn from 'src/view/layouts/MainLayoutPageColumn.vue';
</script>

<template>
  <MainLayoutPageColumn>
    <template #toolbar>
      <BaseToolbar />
    </template>
    <template #content>
      {{ $t('dashboard.dashboard') }}
    </template>
  </MainLayoutPageColumn>
</template>
