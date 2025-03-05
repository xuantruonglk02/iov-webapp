<script setup lang="ts">
import { useAppStore } from 'src/stores/appStore.ts'

const appStore = useAppStore()

const onClickAsideButton = () => {
    appStore.toggleAsideButton()
}
</script>

<template>
    <v-btn icon="mdi-reorder-horizontal" variant="text" @click="onClickAsideButton" />
</template>
