<script setup lang="ts">
import BaseExamCard from 'src/components/base/BaseExamSessionCard.vue';

const examSessions = [
  {
    _id: '1',
    title:
      'Exam title title title title title title title title title title title title title title title title title title title title title title',
    description:
      'Exam description description description description description description description description description description description description description description description description description description description description description description description description description description description description description description description description description description description description description description',
    start_at: new Date('01/01/2024 15:00'),
    finish_at: new Date('01/01/2024 15:00'),
    duration: 3600,
  },
  {
    _id: '2',
    title:
      'Exam title title title title title title title title title title title title title title title title title title title title title title',
    description:
      'Exam description description description description description description description description description description description description description description description description description description description description description description description description description description description description description description description description description description description description description description',
    start_at: new Date('01/01/2024 15:00'),
    finish_at: new Date('01/01/2024 15:00'),
    duration: 3600,
  },
  {
    _id: '3',
    title:
      'Exam title title title title title title title title title title title title title title title title title title title title title title',
    description:
      'Exam description description description description description description description description description description description description description description description description description description description description description description description description description description description description description description description description description description description description description description',
    start_at: new Date('01/01/2024 15:00'),
    finish_at: new Date('01/01/2024 15:00'),
    duration: 3600,
  },
  {
    _id: '4',
    title:
      'Exam title title title title title title title title title title title title title title title title title title title title title title',
    description:
      'Exam description description description description description description description description description description description description description description description description description description description description description description description description description description description description description description description description description description description description description description',
    start_at: new Date('01/01/2024 15:00'),
    finish_at: new Date('01/01/2024 15:00'),
    duration: 3600,
  },
  {
    _id: '5',
    title:
      'Exam title title title title title title title title title title title title title title title title title title title title title title',
    description:
      'Exam description description description description description description description description description description description description description description description description description description description description description description description description description description description description description description description description description description description description description description',
    start_at: new Date('01/01/2024 15:00'),
    finish_at: new Date('01/01/2024 15:00'),
    duration: 3600,
  },
];
</script>

<template>
  <el-row :gutter="20">
    <el-col v-for="examSession in examSessions" :key="examSession._id">
      <BaseExamCard :examSession="examSession" />
    </el-col>
  </el-row>
</template>

<style scoped lang="scss">
.el-col {
  flex: 0;
  padding-bottom: 20px;
}
</style>
