<script setup lang="ts">
defineProps<{
    title: String
}>()

const emit = defineEmits(['update:modelValue'])
</script>

<template>
    <v-navigation-drawer location="right" width="600" temporary>
        <template #prepend>
            <v-container>
                <div class="d-flex flex-row align-items-center justify-between w-100">
                    <div class="d-flex flex-row align-items-center flex-grow-1">
                        <v-btn
                            class="mr-2"
                            variant="text"
                            icon="mdi-close"
                            @click="emit('update:modelValue', false)"
                        />
                        <span>{{ title }}</span>
                    </div>
                    <div>
                        <slot name="header-actions"></slot>
                    </div>
                </div>
            </v-container>
        </template>
        <v-container>
            <slot name="default"></slot>
        </v-container>
    </v-navigation-drawer>
</template>

<style scoped lang="scss">
.v-navigation-drawer__prepend {
    .v-container {
        padding: 8px;
        border-bottom: 1px solid $color-border-main;
    }
}
</style>
