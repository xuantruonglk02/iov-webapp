<script setup lang="ts">
interface Props {
  questions: {
    _id: string;
    index: number;
    answered: boolean;
    flag: boolean;
  }[];
}
const props = defineProps<Props>();
const emits = defineEmits(['navigate']);

const onNavigate = (id: string) => {
  emits('navigate', id);
};
</script>

<template>
  <el-card>
    <el-row :gutter="8">
      <el-col v-for="question in props.questions" :key="question._id" class="question-button">
        <el-button
          :type="question.flag ? 'danger' : question.answered ? 'primary' : ''"
          @click="onNavigate(question._id)"
          >{{ question.index }}</el-button
        >
      </el-col>
    </el-row>
    <template #footer>
      <el-row class="header" justify="end" align="middle" :gutter="20">
        <el-button type="primary">Nộp bài</el-button>
      </el-row>
    </template>
  </el-card>
</template>

<style scoped lang="scss">
.question-button {
  flex: none;
  padding: 4px;
  .el-button {
    width: 10px;
  }
  .el-button:hover {
    background-color: unset !important;
    color: unset !important;
    border: 1px solid rgb(220, 223, 230) !important;
  }
}
@media (max-width: $lg) {
  :deep(.el-scrollbar),
  :deep(.el-scrollbar__wrap) {
    max-height: unset !important;
  }
}
</style>
