<script setup lang="ts">
import { translateYupError } from 'src/i18n/helpers'

defineProps<{
    disabled?: boolean
    readonly?: boolean
    min?: number
    max?: number
    errorMessages: any
}>()

const emit = defineEmits(['update:modelValue'])
</script>

<template>
    <v-text-field
        variant="outlined"
        type="number"
        :disabled="disabled"
        :readonly="readonly"
        :min="min"
        :max="max"
        :error-messages="translateYupError(errorMessages)"
        @update:model-value="(value) => emit('update:modelValue', value)"
    ></v-text-field>
</template>
