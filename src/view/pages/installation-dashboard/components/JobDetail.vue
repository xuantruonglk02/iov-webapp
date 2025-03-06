<script setup lang="ts">
import { jobApiService } from 'src/services/api/jobApiService'
import { IJob } from 'src/services/api/types/job'
import BaseToolbar from 'src/view/components/base/BaseToolbar.vue'
import ToolbarLayout from 'src/view/layouts/ToolbarLayout.vue'
import { onMounted, ref, watch } from 'vue'

const props = defineProps<{
    jobId: number
}>()
const emit = defineEmits(['close', 'delete', 'previous', 'next'])

const job = ref<IJob | null>(null)

const fetchJob = async () => {
    try {
        const response = await jobApiService.getJobDetail(props.jobId)
        job.value = response.data
        console.log(response.data)
    } catch (error: any) {
        console.error(error)
        document.notify('error', error.message)
    }
}

onMounted(() => {
    fetchJob()
})

watch(() => props.jobId, () => {
    fetchJob()
})

const close = () => {
    job.value = null
    emit('close')
}
</script>

<template>
    <ToolbarLayout>
        <template #toolbar>
            <BaseToolbar :title="job?.vin_no || ''">
                <template #actions>
                    <v-row class="toolbar-actions" align="center">
                        <v-btn
                            variant="outlined"
                            icon="mdi-trash-can-outline"
                            size="x-small"
                            class="mr-2"
                            @click="emit('delete', jobId)"
                        ></v-btn>
                        <v-btn prepend-icon="mdi-application-edit-outline">{{ $t('common.buttons.edit') }}</v-btn>
                        <v-divider class="mx-2" vertical />
                        <v-btn icon="mdi-chevron-left" variant="text" @click="emit('previous')"></v-btn>
                        <v-btn icon="mdi-chevron-right" variant="text" @click="emit('next')"></v-btn>
                        <v-btn icon="mdi-close" variant="text" @click="close"></v-btn>
                    </v-row>
                </template>
            </BaseToolbar>
        </template>
        <template #content>
            <div v-if="job" class="job-detail-ctn">
                <div class="job-img-ctn">
                    <img :src="job.segment_img" alt="">
                </div>
                <v-row align="center">
                    <v-col cols="3">vin_no</v-col>
                    <v-col>{{ job.vin_no }}</v-col>
                </v-row>
                <v-row align="center">
                    <v-col cols="3">job_status</v-col>
                    <v-col>{{ job.job_status }}</v-col>
                </v-row>
                <v-row align="center">
                    <v-col cols="3">model</v-col>
                    <v-col>{{ job.model }}</v-col>
                </v-row>
                <v-row align="center">
                    <v-col cols="3">installation_date</v-col>
                    <v-col>{{ job.installation_date }}</v-col>
                </v-row>
            </div>
        </template>
    </ToolbarLayout>
</template>

<style lang="scss" scoped>
.job-detail-ctn {
    .v-col {
        font-weight: 500;
    }
}
.job-img-ctn {
    margin-left: -16px;
    margin-right: -16px;
    height: 180px;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;

    & > img {
        width: 100%;
    }
}
</style>