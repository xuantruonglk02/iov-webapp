<script setup lang="ts">
import { reactive, ref } from 'vue'

const emit = defineEmits(['update:modelValue'])

const files = reactive<File[]>([])
const filePreviews = ref<string[]>([])

const handleFileUpload = (event: Event) => {
    const input = event.target as HTMLInputElement
    if (input.files) {
        files.push(...Array.from(input.files));
        const fileUrls = files.map((file) => URL.createObjectURL(file))
        filePreviews.value = fileUrls

        emit('update:modelValue', fileUrls)
    }
}
</script>

<template>
    <v-row align="center" justify="center">
        <v-col>
            <label class="input-btn text-center">
                <input type="file" multiple hidden @change="handleFileUpload" />
                <v-icon icon="mdi-image-plus-outline"></v-icon>
            </label>
        </v-col>
        <v-col>
            <div class="input-btn text-center">
                <v-img
                    v-if="filePreviews.length"
                    v-for="(preview, index) in filePreviews"
                    :key="index"
                    :src="preview"
                    contain
                    height="100"
                />
                <v-icon v-else icon="mdi-image-multiple-outline"></v-icon>
            </div>
        </v-col>
    </v-row>
</template>

<style scoped lang="scss">
.input-btn {
    border: 1px solid $color-border-input;
    border-radius: 8px;
    color: $color-border-input;
    padding: 12px;
    display: flex;
    align-items: center;
    justify-content: center;

    &:hover {
        cursor: pointer;
        border-color: $color-border-input_hover;
        color: $color-border-input_hover;
    }
}
</style>
