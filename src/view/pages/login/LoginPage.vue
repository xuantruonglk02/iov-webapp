<script setup lang="ts">
import BaseInputPassword from 'src/components/base/BaseInputPassword.vue'
import BaseInputText from 'src/components/base/BaseInputText.vue'
import { useAuthStore } from 'src/stores/authStore'
import { useLoginForm } from './forms/loginForm'

const authStore = useAuthStore()
const loginForm = useLoginForm()

// onMounted(async () => {
//     const response = await authApiService.login()
//     console.log(response)
// })

const login = async () => {
    const response = loginForm.submit()
}
</script>

<template>
    <div class="container text-center">
        <div class="content d-flex flex-column">
            <div class="mb-10">
                <div class="logo-ctn mb-4">
                    <img src="src/assets/logo.png" alt="" />
                </div>
                <h3>{{ $t('login.title') }}</h3>
                <span>{{ $t('login.subTitle') }}</span>
            </div>
            <div class="d-flex flex-column">
                <v-form @submit.prevent="login()">
                    <BaseInputText
                        v-model="loginForm.username.value"
                        :label="$t('common.base.labels.username')"
                        prepend-inner-icon="mdi-account"
                        variant="outlined"
                        :error-messages="loginForm.errors.value.username"
                    />
                    <BaseInputPassword
                        v-model="loginForm.password.value"
                        :error-messages="loginForm.errors.value.password"
                    />
                    <v-btn type="submit">{{ $t('login.submit') }}</v-btn>
                </v-form>
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
.container {
    padding-top: 100px;
}
.content {
    max-width: 500px;
    margin: auto;
}
.logo-ctn {
    max-width: 100px;
    margin: auto;

    img {
        width: 100%;
        border-radius: 8px;
    }
}
</style>
