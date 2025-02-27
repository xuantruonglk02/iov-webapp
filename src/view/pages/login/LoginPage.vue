<script setup lang="ts">
import BaseInputPassword from 'src/components/base/BaseInputPassword.vue'
import BaseInputText from 'src/components/base/BaseInputText.vue'
import BaseNotification from 'src/components/base/BaseNotification.vue'
import { useAuthStore } from 'src/stores/authStore'
import { IUser } from 'src/stores/types'
import { ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useLoginForm } from './forms/loginForm'

const route = useRoute()
const router = useRouter()
const authStore = useAuthStore()
const loginForm = useLoginForm()

const isLoading = ref(false)

const isDisplayNotification = ref(false)
const notificationType = ref('success')
const notificationMessage = ref('')

const login = async () => {
    try {
        isLoading.value = true
        const user = (await loginForm.submit()) as IUser
        isLoading.value = false
        if (user) {
            authStore.setUser(user)

            if (route.query.redirect) router.push(route.query.redirect as string)
            else router.push({ name: 'DashboardPage' })
        }
    } catch (error: any) {
        notificationType.value = 'error'
        notificationMessage.value = error.message
        isDisplayNotification.value = true
    }
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
                        :disabled="isLoading"
                        :error-messages="loginForm.errors.value.username"
                    />
                    <BaseInputPassword
                        v-model="loginForm.password.value"
                        :disabled="isLoading"
                        :error-messages="loginForm.errors.value.password"
                    />
                    <v-btn class="login-btn" type="submit" :loading="isLoading">{{ $t('login.submit') }}</v-btn>
                </v-form>
            </div>
        </div>
    </div>

    <BaseNotification
        v-model="isDisplayNotification"
        :type="notificationType as 'success'"
        :message="notificationMessage"
    />
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
.login-btn {
    width: 100%;
    height: 56px;
}
</style>
