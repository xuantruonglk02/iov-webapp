import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useAppStore = defineStore('app', () => {
  const asideWidth = ref(250);
  const headerHeight = ref(75);

  return { asideWidth, headerHeight };
});
