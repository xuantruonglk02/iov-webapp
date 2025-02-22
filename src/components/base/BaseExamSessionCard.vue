<script setup lang="ts">
import moment, { formatDuration } from 'src/plugins/moment';
import { PageName } from 'src/router/routes';

interface Props {
    examSession: {
        _id: string;
        title: string;
        description?: string;
        start_at: Date;
        finish_at: Date;
        duration: number;
    };
}

const props = defineProps<Props>();
</script>

<template>
    <router-link :to="{ name: PageName.EXAM_DETAIL_PAGE }">
        <el-card style="max-width: 320px" shadow="hover">
            <el-row class="title">
                <el-tooltip
                    placement="top"
                    effect="light"
                    :show-arrow="false"
                    :show-after="500"
                    :content="props.examSession.title"
                >
                    <span>{{ props.examSession.title }}</span>
                </el-tooltip>
            </el-row>
            <el-row v-if="props.examSession.description" class="description">
                <el-tooltip
                    placement="top"
                    effect="light"
                    :show-arrow="false"
                    :show-after="500"
                    :content="props.examSession.description"
                >
                    <span>{{ props.examSession.description }}</span>
                </el-tooltip>
            </el-row>
            <el-row align="middle" class="time">
                <el-col
                    >Start at:
                    {{
                        moment(props.examSession.start_at).formatFromUtc('DD/MM/YYYY hh:mm')
                    }}</el-col
                >
                <el-col
                    >Finish at:
                    {{
                        moment(props.examSession.finish_at).formatFromUtc('DD/MM/YYYY hh:mm')
                    }}</el-col
                >
                <el-col>Duration: {{ formatDuration(props.examSession.duration) }}</el-col>
            </el-row>
            <el-row>
                <router-link :to="{ name: PageName.DOING_EXAM_PAGE }">
                    <el-button type="primary">Start</el-button>
                </router-link>
            </el-row>
        </el-card>
    </router-link>
</template>

<style scoped lang="scss">
.title {
    font-size: 1.125rem;
    font-weight: 500;
    line-height: 1.75rem;
    margin-bottom: 4px;
    letter-spacing: normal;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    max-width: 100%;
}
.description {
    font-size: 0.9375rem;
    font-weight: 400;
    letter-spacing: normal;
    color: $color-card-description;
    margin-bottom: 10px;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
    max-width: 100%;
}
.time {
    font-size: 1rem;
    margin-bottom: 10px;
}
</style>
