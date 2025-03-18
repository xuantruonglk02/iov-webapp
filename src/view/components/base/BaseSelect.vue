<script setup lang="ts">
import { translateYupError } from 'src/i18n/helpers'

defineProps<{
    items: { title: string; value: string }[]
    disabled?: boolean
    readonly?: boolean
    errorMessages: any
}>()

const emit = defineEmits(['update:modelValue'])
</script>

<template>
    <v-select
        :items="items"
        item-title="title"
        item-value="value"
        variant="outlined"
        :disabled="disabled"
        :readonly="readonly"
        :error-messages="translateYupError(errorMessages)"
        @update:model-value="(value) => emit('update:modelValue', value)"
    ></v-select>
</template>
