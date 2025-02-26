<script setup lang="ts">
import { translateYupError } from 'src/i18n/helpers'

defineProps<{
    disabled?: boolean
    errorMessages: any
}>()

const emit = defineEmits(['update:modelValue'])
</script>

<template>
    <v-text-field
        :disabled="disabled"
        :error-messages="translateYupError(errorMessages)"
        @update:model-value="(value) => emit('update:modelValue', value)"
    ></v-text-field>
</template>
