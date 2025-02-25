<script setup lang="ts">
const emits = defineEmits(['close']);

const onClickClose = () => {
    emits('close');
};
</script>

<template>
    <v-navigation-drawer location="right" width="512">
        <template #prepend>
            <v-row align="center" justify="space-between" no-gutters>
                <v-col>
                    <v-btn variant="text" icon="mdi-close" @click="onClickClose" />
                    <span>This is a custom header!</span>
                </v-col>
                <v-col>
                    <slot name="header-actions"></slot>
                </v-col>
            </v-row>
        </template>
    </v-navigation-drawer>
</template>
