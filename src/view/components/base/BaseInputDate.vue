<script setup lang="ts">
import { translateYupError } from 'src/i18n/helpers'

defineProps<{
    disabled?: boolean
    readonly?: boolean
    errorMessages: any
}>()

const emit = defineEmits(['update:modelValue'])
</script>

<template>
    <v-date-input
        variant="outlined"
        prepend-icon=""
        append-inner-icon="mdi-calendar-blank"
        :disabled="disabled"
        :readonly="readonly"
        hide-actions
        :error-messages="translateYupError(errorMessages)"
        @update:model-value="(value) => emit('update:modelValue', value)"
    ></v-date-input>
</template>
