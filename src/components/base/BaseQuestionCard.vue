<script setup lang="ts">
import { Flag } from '@element-plus/icons-vue';
import { ref, watch } from 'vue';

interface Props {
    question: {
        index: number;

        _id: string;
        question: string;
        score?: number;
        is_multiple_answers?: boolean;
        answers: {
            _id: string;
            text: string;
            is_correct?: boolean;
        }[];
    };
}
const props = defineProps<Props>();
const emits = defineEmits(['change', 'flag']);

const selected = ref();
const flag = ref(false);
watch(selected, (value) =>
    props.question.is_multiple_answers
        ? emits('change', { questionIndex: props.question.index, value })
        : emits('change', { questionIndex: props.question.index, value: [value] }),
);

const onFlag = () => {
    flag.value = !flag.value;
    emits('flag', { questionIndex: props.question.index, flag: flag.value });
};
</script>

<template>
    <el-card :id="props.question._id">
        <template #header>
            <el-row justify="space-between" align="middle">
                <span v-if="props.question.score" class="score"
                    >{{ props.question.score }} điểm</span
                >
                <div v-else></div>
                <el-button
                    :type="flag ? 'danger' : 'info'"
                    :icon="Flag"
                    size="large"
                    circle
                    text
                    @click="onFlag"
                />
            </el-row>
        </template>

        <el-row :gutter="10">
            <el-col class="index">Câu {{ props.question.index }}:</el-col>
            <el-col class="body">
                <el-row>
                    <div v-html="props.question.question"></div>
                </el-row>

                <el-row v-if="props.question.is_multiple_answers" class="answer">
                    <el-checkbox-group v-model="selected">
                        <el-row
                            v-for="answer in props.question.answers"
                            :key="answer._id"
                            class="answer-item"
                        >
                            <el-checkbox :value="answer._id">{{ answer.text }}</el-checkbox>
                        </el-row>
                    </el-checkbox-group>
                </el-row>

                <el-row v-else :gutter="20" class="answer">
                    <el-radio-group v-model="selected">
                        <el-col
                            v-for="answer in props.question.answers"
                            :key="answer._id"
                            class="answer-item"
                        >
                            <el-radio :value="answer._id">{{ answer.text }}</el-radio>
                        </el-col>
                    </el-radio-group>
                </el-row>
            </el-col>
        </el-row>
    </el-card>
</template>

<style scoped lang="scss">
.el-card {
    width: 100%;
    :deep(.el-card__header) {
        padding-top: 8px;
        padding-bottom: 8px;
    }
}
.index {
    flex: none !important;
}
.body {
    flex: 1;
    max-width: 100%;
    .answer {
        margin-top: 8px;
        .answer-item {
            flex: 1;
        }
    }
}
.score {
    color: var(--el-color-danger);
}
</style>
