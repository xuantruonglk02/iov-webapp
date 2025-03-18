<script setup lang="ts">
import { IUser } from 'src/services/api/types/user'
import { userApiService } from 'src/services/api/userApiService'
import BaseTable from 'src/view/components/base/BaseTable.vue'
import BaseToolbar from 'src/view/components/base/BaseToolbar.vue'
import ToolbarLayout from 'src/view/layouts/ToolbarLayout.vue'
import { onMounted, ref } from 'vue'
import DrawerCreateUser from './components/DrawerCreateUser.vue'

const isOpeningCreateUserForm = ref(false)

const usersList = ref<IUser[]>([])

const fetchUsers = async () => {
    try {
        const response = await userApiService.getUsers()
        usersList.value = response.data
        console.log(response.data)
    } catch (error: any) {
        console.error(error)
        document.notify('error', error.message)
    }
}

const openCreateUserForm = () => {
    isOpeningCreateUserForm.value = true
}

const closeCreateUserForm = () => {
    isOpeningCreateUserForm.value = false
}

onMounted(() => {
    fetchUsers()
})
</script>

<template>
    <ToolbarLayout>
        <template #toolbar>
            <BaseToolbar :title="$t('user.title')">
                <template #actions>
                    <v-row class="toolbar-actions" align="center">
                        <v-btn prepend-icon="mdi-plus-thick" @click="openCreateUserForm">{{
                            $t('common.buttons.add')
                        }}</v-btn>
                        <v-divider class="mx-2" vertical />
                        <v-btn icon="mdi-filter-variant" variant="text"></v-btn>
                    </v-row>
                </template>
            </BaseToolbar>
        </template>
        <template #content>
            <BaseTable :data="usersList" hide-default-footer :items-per-page="-1" class="h-100" />
        </template>
    </ToolbarLayout>

    <DrawerCreateUser
        v-model="isOpeningCreateUserForm"
        @close="closeCreateUserForm"
    />
</template>

<style scoped lang="scss">
:deep(.toolbar-layout-content) {
    padding: 1px 0 0 0;
}
</style>
