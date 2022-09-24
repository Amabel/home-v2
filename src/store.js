import { ref } from 'vue';
import { useStorage } from '@vueuse/core';

// export const darkMode = ref(true);

export const darkMode = useStorage('dark-mode', true);
