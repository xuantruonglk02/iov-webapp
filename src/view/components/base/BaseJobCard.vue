<script setup lang="ts">
import { IJob } from 'src/services/api/types/job'

defineProps<{
    job: IJob
    selected?: boolean
}>()

const emit = defineEmits(['open'])
</script>

<template>
    <v-card variant="outlined" :class="selected ? 'selected' : ''">
        <v-container>
            <v-row class="mb-4" align="start" no-gutters>
                <v-avatar
                    :image="job.segment_img"
                    class="me-2"
                />
                <v-col class="d-flex flex-column">
                    <span><b>{{ job.vin_no }}</b></span>
                    <span>{{ job.model }}</span>
                    <span class="job-status">{{ job.job_status }}</span>
                </v-col>
            </v-row>
            <div class="card-img-ctn p-0 mb-4">
                <img :src="job.segment_img" alt="">
            </div>
            <v-row class="mb-4" no-gutters>
                <v-col class="d-flex flex-column">
                    <span>{{ job.installation_date }}</span>
                </v-col>
            </v-row>
            <v-row justify="end" no-gutters>
                <v-col class="card-actions-ctn">
                    <v-row>
                        <v-btn variant="text" icon="mdi-chevron-right-circle-outline" @click="emit('open', job.job_id)"></v-btn>
                    </v-row>
                </v-col>
            </v-row>
        </v-container>
    </v-card>
</template>

<style scoped lang="scss">
.v-card {
    width: 100%;
    border: 1px solid $color-border-primary;
    border-radius: 6px;
    
    &.selected {
        border: 1px solid $color-primary !important;
    }

    &:hover {
        cursor: pointer;
        box-shadow:
            rgba(0, 0, 0, 0.16) 0px 3px 6px,
            rgba(0, 0, 0, 0.23) 0px 3px 6px;
    }
}
.card-img-ctn {
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
.card-actions-ctn {
    width: unset;
    flex: none;
}
.job-status {
    color: $color-primary;
}
</style>
