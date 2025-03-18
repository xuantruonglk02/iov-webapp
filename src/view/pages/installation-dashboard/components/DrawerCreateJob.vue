<script setup lang="ts">
import BaseDrawer from 'src/view/components/base/BaseDrawer.vue'
import BaseInputDate from 'src/view/components/base/BaseInputDate.vue'
import BaseInputText from 'src/view/components/base/BaseInputText.vue'
import { useCreateJobForm } from '../forms/createJobForm'
import BaseInputNumber from 'src/view/components/base/BaseInputNumber.vue'
import BaseInputImages from 'src/view/components/base/BaseInputImages.vue'

const emit = defineEmits(['close'])

const createJobForm = useCreateJobForm()

const close = () => {
    createJobForm.handleReset()
    emit('close')
}
</script>

<template>
    <BaseDrawer
        :title="$t('installation.createJobForm.title')"
        @update:model-value="close"
    >
        <template #header-actions>
            <v-btn class="mr-2" variant="outlined" @click="close">{{
                $t('common.buttons.cancel')
            }}</v-btn>
            <v-btn>{{ $t('common.buttons.save') }}</v-btn>
        </template>

        <v-container>
            <v-row align="center">
                <v-col cols="4">Loại cài đặt</v-col>
                <v-col>
                    <BaseInputText
                        v-model="createJobForm.installation_type.value"
                        :error-messages="createJobForm.errors.value.installation_type"
                    />
                </v-col>
            </v-row>
            <v-row align="center">
                <v-col cols="4">Ghi chú</v-col>
                <v-col>
                    <BaseInputText
                        v-model="createJobForm.note.value"
                        :error-messages="createJobForm.errors.value.note"
                    />
                </v-col>
            </v-row>
            <v-row align="center">
                <v-col cols="4">Ngày cài đặt</v-col>
                <v-col>
                    <BaseInputDate
                        v-model="createJobForm.installation_date.value"
                        :error-messages="createJobForm.errors.value.installation_date"
                    />
                </v-col>
            </v-row>
            <v-row align="center">
                <v-col cols="4">Vị trí cài đặt</v-col>
                <v-col>
                    <BaseInputText
                        v-model="createJobForm.installation_location.value"
                        append-inner-icon="mdi-map-marker"
                        :error-messages="createJobForm.errors.value.installation_location"
                    />
                </v-col>
            </v-row>
            <v-row align="center">
                <v-col cols="4">Model</v-col>
                <v-col>
                    <BaseInputText
                        v-model="createJobForm.model.value"
                        :error-messages="createJobForm.errors.value.model"
                    />
                </v-col>
            </v-row>
            <v-row align="center">
                <v-col cols="4">Engine no</v-col>
                <v-col>
                    <BaseInputText
                        v-model="createJobForm.engine_no.value"
                        :error-messages="createJobForm.errors.value.engine_no"
                    />
                </v-col>
            </v-row>
            <v-row align="center">
                <v-col cols="4">ODO (km)</v-col>
                <v-col>
                    <BaseInputNumber
                        v-model="createJobForm.odometer_reading.value"
                        :min="0"
                        :error-messages="createJobForm.errors.value.odometer_reading"
                    />
                </v-col>
            </v-row>
            <v-row align="center">
                <v-col cols="4">Số Sim</v-col>
                <v-col>
                    <BaseInputText
                        v-model="createJobForm.sim_no.value"
                        append-inner-icon="mdi-barcode-scan"
                        :error-messages="createJobForm.errors.value.sim_no"
                    />
                </v-col>
            </v-row>
            <v-row align="center">
                <v-col cols="4">Số Imei</v-col>
                <v-col>
                    <BaseInputText
                        v-model="createJobForm.imei_no.value"
                        append-inner-icon="mdi-barcode-scan"
                        :error-messages="createJobForm.errors.value.imei_no"
                    />
                </v-col>
            </v-row>
            <v-row align="center">
                <v-col cols="4">Số Vin</v-col>
                <v-col>
                    <BaseInputText
                        v-model="createJobForm.vin_no.value"
                        :error-messages="createJobForm.errors.value.vin_no"
                    />
                </v-col>
            </v-row>
            <v-row align="center">
                <v-col cols="4">Số Lot</v-col>
                <v-col>
                    <BaseInputText
                        v-model="createJobForm.lot_no.value"
                        :error-messages="createJobForm.errors.value.lot_no"
                    />
                </v-col>
            </v-row>
            <v-row align="center">
                <v-col cols="4">Ảnh thông tin xe</v-col>
                <v-col>
                    <BaseInputImages
                        v-model="createJobForm.vehicle_infor_img_paths.value"
                        :error-messages="createJobForm.errors.value.vehicle_infor_img_paths"
                    />
                </v-col>
            </v-row>
        </v-container>
    </BaseDrawer>
</template>
