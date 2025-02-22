import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useAppStore = defineStore('app', () => {
    const asideWidth = ref(250);
    const asideCollapsed = ref(false);
    const headerHeight = ref(56);
    const toolbarHeight = ref(56);

    const toggleAsideButton = () => {
        if (asideCollapsed.value === true) {
            asideCollapsed.value = false;
            asideWidth.value = 250;
        } else {
            asideCollapsed.value = true;
            asideWidth.value = 60;
        }
    };

    return { asideWidth, asideCollapsed, headerHeight, toolbarHeight, toggleAsideButton };
});
