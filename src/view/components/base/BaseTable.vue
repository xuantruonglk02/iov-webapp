<script setup lang="ts">
defineProps<{
    data: any[]
}>()
</script>

<template>
    <v-data-table :items="data" hover fixed-header></v-data-table>
</template>

<style scoped lang="scss">
.v-table {
    :deep(thead) {
        .v-data-table__th {
            font-weight: 700;

            &:not(:first-of-type) {
                border-left: 1px solid $color-border-primary;
            }
        }
    }
}
</style>
