<script setup lang="ts">
import BaseSaleCard from 'src/components/base/BaseSaleCard.vue'
import BaseToolbar from 'src/components/base/BaseToolbar.vue'
import { jobApiService } from 'src/services/api/jobApiService'
import { IJob } from 'src/services/api/types/job'
import ToolbarLayout from 'src/view/layouts/ToolbarLayout.vue'
import { onMounted, ref } from 'vue'
import DrawerCreateJob from './components/DrawerCreateJob.vue'
import SaleOrderDetail from './components/SaleOrderDetail.vue'

const isOpeningCreateJobForm = ref(false)
const isOpeningSaleOrderDetail = ref(false)

const jobsList = ref<IJob[]>([])
const openingSaleOrder = ref<IJob | null>(null)

const fetchJobs = async () => {
    try {
        const response = await jobApiService.searchJobs({})
        jobsList.value = response.data.jobs
        console.log(response.data.jobs)
    } catch (error: any) {
        document.notify('error', error.message)
    }
}

const onClickCreateJob = () => {
    isOpeningCreateJobForm.value = true
}

onMounted(() => {
    fetchJobs()
})
</script>

<template>
    <v-row class="page-ctn" no-gutters>
        <ToolbarLayout>
            <template #toolbar>
                <BaseToolbar :title="$t('installation.installation')">
                    <template #actions>
                        <v-row class="toolbar-actions" align="center">
                            <v-btn prepend-icon="mdi-plus-thick" @click="onClickCreateJob">{{
                                $t('common.buttons.add')
                            }}</v-btn>
                            <v-divider class="mx-2" vertical />
                            <v-btn icon="mdi-filter-variant" variant="text"></v-btn>
                        </v-row>
                    </template>
                </BaseToolbar>
            </template>
            <template #content>
                <div class="mb-2">{{ $t('installation.finished') }}</div>
                <v-row justify="start">
                    <v-col
                        v-for="job in jobsList"
                        :key="job.job_id"
                        :cols="12"
                        :sm="isOpeningSaleOrderDetail ? 12 : 6"
                        :md="isOpeningSaleOrderDetail ? 6 : 4"
                        :lg="isOpeningSaleOrderDetail ? 6 : 3"
                        :xl="isOpeningSaleOrderDetail ? 4 : 3"
                    >
                        <BaseSaleCard :job="job" />
                    </v-col>
                </v-row>
            </template>
        </ToolbarLayout>

        <SaleOrderDetail
            v-if="isOpeningSaleOrderDetail && openingSaleOrder"
            :job="openingSaleOrder"
        />
    </v-row>

    <DrawerCreateJob v-model="isOpeningCreateJobForm" />
</template>

<style scoped lang="scss">
.page-ctn {
    height: 100%;

    & > .v-col:not(:first-of-type) {
        border-left: 1px solid $color-border-main;
    }
}
</style>
