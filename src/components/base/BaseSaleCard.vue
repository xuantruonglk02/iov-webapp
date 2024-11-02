<script setup lang="ts">
import { InfoFilled } from '@element-plus/icons-vue';

interface Props {

}
const props = defineProps<Props>();
</script>

<template>
  <el-card shadow="hover" style="width: 340px">
    <el-row align="middle">
      <el-avatar
        src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
        class="me-2"
      />
      <el-col class="title d-flex flex-column">
        <span>Sale Order : SOBU-TESLA</span>
        <span>Ticket No. : TN8927</span>
      </el-col>
    </el-row>
    <div class="p-0">
      <img
        src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
        class="card-img"
      />
    </div>
    <el-row>
      <el-col class="d-flex flex-column">
        <span>70-1220</span>
        <span>3/22/2023 2:10:00 PM</span>
      </el-col>
    </el-row>
    <el-row>
      <span>a, a, a, a, a, a, a, a, a, a, a, a, a, a, a, a, a, a, a, a, a, a, a, a, a, a, a, a, a, a, a, a, a, a, a, a, a, a, a, a, a, a, a, a, a, a, a, a, a, a, a, a, a, a, a, a, a, a, a, a, a, a, a, a, a, a, a, a, a, a, a, a, a, a, a, a, a, a, a, a</span>
    </el-row>
    <el-row justify="space-between">
      <el-col>
        <el-button>VIEW MAP</el-button>
      </el-col>
      <el-col>
        <el-row align="middle">
          <el-button :icon="InfoFilled" link></el-button>
          <el-button :icon="InfoFilled" link></el-button>
        </el-row>
      </el-col>
    </el-row>
  </el-card>
</template>

<style scoped lang="scss">
:deep(.el-card__body) {
  padding-left: 0 !important;
  padding-right: 0 !important;

  & > .el-row {
    padding: var(--el-card-padding);

    .el-col {
      flex: none;
    }
  }
  & > .el-row:first-of-type {
    padding-top: 0 !important;
  }
  & > .el-row:last-of-type {
    padding-bottom: 0 !important;
  }
}

.title {
}

.card-img {
  width: 100%;
}
</style>