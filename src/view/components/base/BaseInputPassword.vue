<script setup lang="ts">
import { translateYupError } from 'src/i18n/helpers'
import { ref } from 'vue'

defineProps<{
    disabled?: boolean
    errorMessages: any
}>()
const emit = defineEmits(['update:modelValue'])

const isShowPassword = ref(false)

const clickShowPassword = () => {
    isShowPassword.value = !isShowPassword.value
}
</script>

<template>
    <v-text-field
        :label="$t('common.base.labels.password')"
        variant="outlined"
        :type="isShowPassword ? 'text' : 'password'"
        prepend-inner-icon="mdi-lock"
        :append-inner-icon="isShowPassword ? 'mdi-eye-outline' : 'mdi-eye-off-outline'"
        :disabled="disabled"
        :error-messages="translateYupError(errorMessages)"
        @click:append-inner="clickShowPassword"
        @update:model-value="(value) => emit('update:modelValue', value)"
    ></v-text-field>
</template>
