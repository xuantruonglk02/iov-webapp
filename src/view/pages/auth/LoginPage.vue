<script setup lang="ts">
import { authApiService } from 'src/services/api/authApiService';
import { useAuthStore } from 'src/stores/authStore';
import { onMounted } from 'vue';

const authStore = useAuthStore();
console.log(authStore.loggedUser);

onMounted(async () => {
    const response = await authApiService.login();
    console.log(response);
});
</script>

<template>LoginPage</template>
