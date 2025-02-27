<script setup lang="ts">
import HeaderNotification from './HeaderNotification.vue'
import HeaderUser from './HeaderUser.vue'
import HeaderAsideButton from './HeaderAsideButton.vue'
import HeaderSearchBar from './HeaderSearchBar.vue'
import { useAppStore } from 'src/stores/appStore.ts'

const appStore = useAppStore()
</script>

<template>
    <v-app-bar flat>
        <v-container>
            <v-row justify="space-between" align="center">
                <v-col>
                    <HeaderAsideButton />
                </v-col>
                <v-col :span="24">
                    <HeaderSearchBar />
                </v-col>
                <v-col class="header-actions-ctn">
                    <v-container>
                        <v-row align="center">
                            <v-col>
                                <HeaderNotification />
                            </v-col>
                            <v-col>
                                <HeaderUser />
                            </v-col>
                        </v-row>
                    </v-container>
                </v-col>
            </v-row>
        </v-container>
    </v-app-bar>
</template>

<style scoped lang="scss">
.v-toolbar {
    border-bottom: 1px solid $color-border-main;
}
.header-actions-ctn {
    width: unset;
    flex: none;
}
</style>
