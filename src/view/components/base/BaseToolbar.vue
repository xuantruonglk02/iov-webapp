<script setup lang="ts">
defineProps<{
    title: String
}>()
</script>

<template>
    <v-container>
        <v-row justify="space-between" align="center">
            <v-col class="toolbar-title">{{ title }}</v-col>
            <v-col class="toolbar-actions-ctn">
                <slot name="actions"></slot>
            </v-col>
        </v-row>
    </v-container>
</template>

<style scoped lang="scss">
.v-container {
    max-width: none;
    margin: 0;
    border-bottom: 1px solid $color-border-primary;
}
.toolbar-title {
    font-weight: 600;
}
.toolbar-actions-ctn {
    width: unset;
    flex: none;
}
</style>
