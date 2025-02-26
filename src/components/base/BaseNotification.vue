<script setup lang="ts">
defineProps<{
    type: 'success' | 'error' | 'info' | 'warning'
    message: string
}>()

const emit = defineEmits(['update:modelValue'])

const getIcon = (type: string) => {
    switch (type) {
        case 'info':
            return 'mdi-information'
        case 'warning':
            return 'mdi-alert-circle'
        case 'error':
            return 'mdi-close-circle'
        default:
            return 'mdi-check-circle'
    }
}
</script>

<template>
    <v-snackbar
        position="fixed"
        location="top right"
        max-width="450"
        :color="type"
        @update:model-value="(value) => emit('update:modelValue', value)"
    >
        <div class="d-flex flex-row align-start">
            <v-icon :icon="getIcon(type)" class="mr-2"></v-icon>
            {{ message }}
        </div>
    </v-snackbar>
</template>
