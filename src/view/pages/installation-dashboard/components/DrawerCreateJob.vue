<script setup lang="ts">
import BaseDrawer from 'src/components/base/BaseDrawer.vue'
import BaseInputText from 'src/components/base/BaseInputText.vue'
import { useCreateJobForm } from '../forms/createLobForm'

const emit = defineEmits(['update:modelValue'])

const createJobForm = useCreateJobForm()
</script>

<template>
    <BaseDrawer
        :title="$t('installation.createJobForm.title')"
        @update:model-value="(value) => emit('update:modelValue', value)"
    >
        <template #header-actions>
            <v-btn class="mr-2" variant="outlined" @click="emit('update:modelValue', false)">{{
                $t('common.buttons.cancel')
            }}</v-btn>
            <v-btn>{{ $t('common.buttons.save') }}</v-btn>
        </template>

        <v-container>
            <v-row align="center">
                <v-col cols="4">Sale Order</v-col>
                <v-col>
                    <BaseInputText
                        v-model="createJobForm.order.value"
                        :error-messages="createJobForm.errors.value.order"
                    />
                </v-col>
            </v-row>
            <v-row align="center">
                <v-col cols="4">Ticket No.</v-col>
                <v-col>
                    <BaseInputText
                        v-model="createJobForm.ticket.value"
                        :error-messages="createJobForm.errors.value.ticket"
                    />
                </v-col>
            </v-row>
        </v-container>
    </BaseDrawer>
</template>
