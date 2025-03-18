<script setup lang="ts">
import { UserRole } from 'src/services/api/types/user'
import BaseDrawer from 'src/view/components/base/BaseDrawer.vue'
import BaseInputText from 'src/view/components/base/BaseInputText.vue'
import BaseSelect from 'src/view/components/base/BaseSelect.vue'
import { useCreateUserForm } from '../forms/createUserForm'

const emit = defineEmits(['close'])

const createUserForm = useCreateUserForm()

const close = () => {
    createUserForm.handleReset()
    emit('close')
}
</script>

<template>
    <BaseDrawer :title="$t('user.createUserForm.title')" @update:model-value="close">
        <template #header-actions>
            <v-btn class="mr-2" variant="outlined" @click="close">{{
                $t('common.buttons.cancel')
            }}</v-btn>
            <v-btn>{{ $t('common.buttons.save') }}</v-btn>
        </template>

        <v-container>
            <v-row align="center">
                <v-col cols="4">Tên người dùng</v-col>
                <v-col>
                    <BaseInputText
                        v-model="createUserForm.user_name.value"
                        :error-messages="createUserForm.errors.value.user_name"
                    />
                </v-col>
            </v-row>
            <v-row align="center">
                <v-col cols="4">Tên thật</v-col>
                <v-col>
                    <BaseInputText
                        v-model="createUserForm.full_name.value"
                        :error-messages="createUserForm.errors.value.full_name"
                    />
                </v-col>
            </v-row>
            <v-row align="center">
                <v-col cols="4">Chức vụ</v-col>
                <v-col>
                    <BaseSelect
                        v-model="createUserForm.role_name.value"
                        :items="
                            Object.values(UserRole).map((role) => ({ title: role, value: role }))
                        "
                        :error-messages="createUserForm.errors.value.role_name"
                    />
                </v-col>
            </v-row>
            <v-row align="center">
                <v-col cols="4">Số điện thoại</v-col>
                <v-col>
                    <BaseInputText
                        v-model="createUserForm.phone_number.value"
                        :error-messages="createUserForm.errors.value.phone_number"
                    />
                </v-col>
            </v-row>
            <v-row align="center">
                <v-col cols="4">Email</v-col>
                <v-col>
                    <BaseInputText
                        v-model="createUserForm.email.value"
                        :error-messages="createUserForm.errors.value.email"
                    />
                </v-col>
            </v-row>
        </v-container>
    </BaseDrawer>
</template>
