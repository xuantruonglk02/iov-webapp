<script setup lang="ts"></script>

<template>
    <v-col>
        <div class="toolbar-ctn">
            <slot name="toolbar"></slot>
        </div>
        <v-container class="toolbar-layout-content">
            <slot name="content"></slot>
        </v-container>
    </v-col>
</template>

<style scoped lang="scss">
.v-col {
    padding: 0;
    height: 100%;
}
.toolbar-ctn {
    height: 56px;
}
.v-container {
    height: calc(100% - 56px);
    margin: 0;
    max-width: none;
    overflow-y: auto;
}
</style>
