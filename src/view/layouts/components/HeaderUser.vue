<script setup lang="ts">
import { Setting, User, UserFilled } from '@element-plus/icons-vue';
</script>

<template>
  <el-dropdown trigger="click">
    <div>
      <el-avatar :icon="UserFilled" />
    </div>
    <template #dropdown>
      <el-dropdown-menu>
        <el-dropdown-item>
          <el-row>
            <el-avatar :icon="UserFilled" />
            <el-col>
              <span>John Doe</span>
              <span>Admin</span>
            </el-col>
          </el-row>
        </el-dropdown-item>
        <el-dropdown-item :icon="User">Profile</el-dropdown-item>
        <el-dropdown-item :icon="Setting">Settings</el-dropdown-item>
        <el-dropdown-item divided>Logout</el-dropdown-item>
      </el-dropdown-menu>
    </template>
  </el-dropdown>
</template>
