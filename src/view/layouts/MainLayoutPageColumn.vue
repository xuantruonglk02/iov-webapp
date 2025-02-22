<script setup lang="ts"></script>

<template>
    <el-col class="container-col">
        <slot name="toolbar"></slot>
        <el-main>
            <slot name="content"></slot>
        </el-main>
    </el-col>
</template>

<style scoped lang="scss">
.container-col {
    width: 100%;
    flex: 1;
    border-right: 1px solid $color-border-main;
}

.container-col:last-of-type {
    border-right: none !important;
}
</style>
