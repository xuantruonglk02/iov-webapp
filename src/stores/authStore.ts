import { defineStore } from 'pinia';
import { ref, Ref } from 'vue';

export const useAuthStore = defineStore('auth', () => {
    const loggedUser: Ref<any> = ref(undefined);

    const setLoggedUser = (value: any) => {
        loggedUser.value = value;
    };

    return { loggedUser, setLoggedUser };
});
