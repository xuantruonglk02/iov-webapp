<script setup lang="ts">
import { jobApiService } from 'src/services/api/jobApiService'
import { IJob } from 'src/services/api/types/job'
import BaseJobCard from 'src/view/components/base/BaseJobCard.vue'
import BaseToolbar from 'src/view/components/base/BaseToolbar.vue'
import ToolbarLayout from 'src/view/layouts/ToolbarLayout.vue'
import { onMounted, ref } from 'vue'
import DrawerCreateJob from './components/DrawerCreateJob.vue'
import JobDetail from './components/JobDetail.vue'

const isOpeningCreateJobForm = ref(false)
const isOpeningJobDetail = ref(false)

const jobsList = ref<IJob[]>([])
const openingJob = ref<IJob | null>(null)

const fetchJobs = async () => {
    try {
        const response = await jobApiService.searchJobs({})
        jobsList.value = response.data.jobs
        console.log(response.data.jobs)
    } catch (error: any) {
        console.error(error)
        document.notify('error', error.message)
    }
}

const scrollToJob = (jobId: number) => {
    const el = document.getElementById(`job_${jobId}`)
    el?.scrollIntoView({ behavior: 'smooth' })
}

const openJobDetail = (jobId: number) => {
    const targetJob = jobsList.value.find((job) => job.job_id === jobId)
    if (!targetJob) return

    openingJob.value = targetJob
    isOpeningJobDetail.value = true

    scrollToJob(targetJob.job_id)
}

const closeJobDetail = () => {
    openingJob.value = null
    isOpeningJobDetail.value = false
}

const openNextJob = (step: number) => {
    const jobIndex = jobsList.value.findIndex((job) => job.job_id === openingJob.value?.job_id)
    const targetJob = jobsList.value[jobIndex + step]
    if (!targetJob) return

    openingJob.value = targetJob

    scrollToJob(targetJob.job_id)
}

const deleteJob = async (jobId: number) => {
    try {
        await jobApiService.deleteJobs([jobId])
        document.notify('success', 'Delete job successfully')
        isOpeningJobDetail.value = false
        openingJob.value = null

        fetchJobs()
    } catch (error: any) {
        console.error(error)
        document.notify('error', error.message)
    }
}

const openCreateJobForm = () => {
    isOpeningCreateJobForm.value = true
}

const closeCreateJobForm = () => {
    isOpeningCreateJobForm.value = false
}

onMounted(() => {
    fetchJobs()
})
</script>

<template>
    <v-row class="page-ctn" no-gutters>
        <ToolbarLayout>
            <template #toolbar>
                <BaseToolbar :title="$t('installation.title')">
                    <template #actions>
                        <v-row class="toolbar-actions" align="center">
                            <v-btn prepend-icon="mdi-plus-thick" @click="openCreateJobForm">{{
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
                        :sm="isOpeningJobDetail ? 12 : 6"
                        :md="isOpeningJobDetail ? 6 : 4"
                        :lg="isOpeningJobDetail ? 6 : 3"
                        :xl="isOpeningJobDetail ? 4 : 3"
                    >
                        <BaseJobCard
                            :id="`job_${job.job_id}`"
                            :job="job"
                            :selected="openingJob?.job_id === job.job_id"
                            @open="openJobDetail"
                        />
                    </v-col>
                </v-row>
            </template>
        </ToolbarLayout>

        <JobDetail
            v-if="isOpeningJobDetail && openingJob"
            :jobId="openingJob.job_id"
            @close="closeJobDetail"
            @previous="openNextJob(-1)"
            @next="openNextJob(1)"
            @delete="deleteJob"
        />
    </v-row>

    <DrawerCreateJob
        v-model="isOpeningCreateJobForm"
        @close="closeCreateJobForm"
    />
</template>

<style scoped lang="scss">
.page-ctn {
    height: 100%;

    & > .v-col:not(:first-of-type) {
        border-left: 1px solid $color-border-primary;
    }
}
</style>
