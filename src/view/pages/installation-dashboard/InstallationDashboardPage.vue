<script setup lang="ts">
import BaseSaleCard from 'src/components/base/BaseSaleCard.vue'
import BaseToolbar from 'src/components/base/BaseToolbar.vue'
import ToolbarLayout from 'src/view/layouts/ToolbarLayout.vue'
import { ref } from 'vue'
import DrawerCreateJob from './components/DrawerCreateJob.vue'

const isOpeningCreateJobForm = ref(false)

const fetchJobs = async () => {

}

const onClickCreateJob = () => {
    isOpeningCreateJobForm.value = true
}
</script>

<template>
    <ToolbarLayout>
        <template #toolbar>
            <BaseToolbar :title="$t('installation.installation')">
                <template #actions>
                    <v-row class="toolbar-actions" align="center">
                        <v-btn
                            prepend-icon="mdi-plus-thick"
                            @click="onClickCreateJob"
                            >{{ $t('common.buttons.add') }}</v-btn
                        >
                        <v-divider class="mx-2" vertical />
                        <v-btn icon="mdi-filter-variant" variant="text"></v-btn>
                    </v-row>
                </template>
            </BaseToolbar>
        </template>
        <template #content>
            <div class="mb-2">{{ $t('installation.finished') }}</div>
            <v-row justify="start">
                <v-col v-for="i in 5" :key="i">
                    <BaseSaleCard />
                </v-col>
            </v-row>
        </template>
    </ToolbarLayout>

    <DrawerCreateJob v-model="isOpeningCreateJobForm" />
</template>
