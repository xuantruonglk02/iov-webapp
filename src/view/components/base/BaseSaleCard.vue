<script setup lang="ts">
import { IJob } from 'src/services/api/types/job'

defineProps<{
    job: IJob
}>()
</script>

<template>
    <v-card variant="outlined">
        <v-container>
            <v-row class="mb-4" align="center" no-gutters>
                <v-avatar
                    :image="job.segment_img"
                    class="me-2"
                />
                <v-col class="title d-flex flex-column">
                    <span><b>Sale Order : SOBU-TESLA</b></span>
                    <span>Ticket No. : TN8927</span>
                </v-col>
            </v-row>
            <div class="card-img-ctn p-0 mb-4">
                <img :src="job.segment_img" alt="">
            </div>
            <v-row no-gutters>
                <v-col class="d-flex flex-column">
                    <span><b>70-1220</b></span>
                    <span>{{ job.installation_date }}</span>
                </v-col>
            </v-row>
            <v-row class="my-6" no-gutters>
                <span>d e s c r i p t i o n</span>
            </v-row>
            <v-row justify="space-between" no-gutters>
                <v-col>
                    <v-btn class="view-map-btn" variant="text">VIEW MAP</v-btn>
                </v-col>
                <v-col class="card-actions-ctn">
                    <v-row>
                        <v-btn variant="text" icon="mdi-chevron-right-circle-outline"></v-btn>
                        <v-btn variant="text" icon="mdi-trash-can-outline"></v-btn>
                    </v-row>
                </v-col>
            </v-row>
        </v-container>
    </v-card>
</template>

<style scoped lang="scss">
.v-card {
    width: 100%;
    border: 1px solid $color-border-main;
    border-radius: 6px;

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
.view-map-btn {
    color: $color-primary;
}
.card-actions-ctn {
    width: unset;
    flex: none;
}
</style>
