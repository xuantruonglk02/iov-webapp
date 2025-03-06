<script setup lang="ts">
import { IUser } from 'src/services/api/types/user'
import { userApiService } from 'src/services/api/userApiService'
import BaseTable from 'src/view/components/base/BaseTable.vue'
import BaseToolbar from 'src/view/components/base/BaseToolbar.vue'
import ToolbarLayout from 'src/view/layouts/ToolbarLayout.vue'
import { onMounted, ref } from 'vue'

const usersList = ref<IUser[]>([])

const fetchUsers = async () => {
    try {
        const response = await userApiService.getUsers()
        usersList.value = response.data
        console.log(response.data)
    } catch (error: any) {
        document.notify('error', error.message)
    }
}

onMounted(() => {
    fetchUsers()
})
</script>

<template>
    <ToolbarLayout>
        <template #toolbar>
            <BaseToolbar :title="$t('users.title')">
                <template #actions>
                    <v-row class="toolbar-actions" align="center">
                        <v-btn prepend-icon="mdi-plus-thick" @click="() => {}">{{
                            $t('common.buttons.add')
                        }}</v-btn>
                        <v-divider class="mx-2" vertical />
                        <v-btn icon="mdi-filter-variant" variant="text"></v-btn>
                    </v-row>
                </template>
            </BaseToolbar>
        </template>
        <template #content>
            <BaseTable :data="usersList" hide-default-footer />
        </template>
    </ToolbarLayout>
</template>
