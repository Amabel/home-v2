import { useStorage } from '@vueuse/core';

export const darkMode = useStorage('dark-mode', true);
