<script setup lang="ts">
import { IJob } from 'src/services/api/types/job'
import ToolbarLayout from 'src/view/layouts/ToolbarLayout.vue'

defineProps<{
    job: IJob
}>()
</script>

<template>
    <ToolbarLayout>
        <template #toolbar>
            <BaseToolbar :title="$t('installation.installation')">
                <template #actions>
                    <v-row class="toolbar-actions" align="center">
                        <v-btn prepend-icon="mdi-plus-thick">{{ $t('common.buttons.add') }}</v-btn>
                        <v-divider class="mx-2" vertical />
                        <v-btn icon="mdi-filter-variant" variant="text"></v-btn>
                    </v-row>
                </template>
            </BaseToolbar>
        </template>
        <template #content> </template>
    </ToolbarLayout>
</template>
