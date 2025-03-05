<script setup lang="ts">
import { useAppStore } from 'src/stores/appStore.ts'
import { computed } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const appStore = useAppStore()

const rail = computed(() => appStore.isAsideCollapsed)

const aside = [
    {
        title: 'Dashboard',
        icon: 'mdi-tools',
        to: 'InstallationDashboardPage',
    },
]
</script>

<template>
    <v-navigation-drawer :rail="rail">
        <v-list density="compact">
            <v-list-item
                v-for="(item, index) in aside"
                :key="index"
                :prepend-icon="item.icon"
                :title="item.title"
                :value="item.to"
                @click="router.push({ name: item.to })"
            ></v-list-item>

            <!-- <v-divider class="mx-2" />

            <v-list-item @click="router.push({ name: 'InstallationDashboardPage' })">
                <template v-slot:prepend>
                    <v-icon icon="mdi-tools"></v-icon>
                </template>
                <v-list-item-title v-text="'About'"></v-list-item-title>
            </v-list-item>
            <v-list-item @click="router.push({ name: 'InstallationDashboardPage' })">
                <template v-slot:prepend>
                    <v-icon icon="mdi-tools"></v-icon>
                </template>
                <v-list-item-title v-text="'App Gallery'"></v-list-item-title>
            </v-list-item> -->
        </v-list>
    </v-navigation-drawer>
</template>
