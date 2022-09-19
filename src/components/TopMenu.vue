<template>
  <div
    class="top-nav flex justify-between items-center px-4 md:hidden w-full h-16"
  >
    <div class="left flex items-center">
      <Avatar />
      <div class="text ml-4 text-xl font-bold">Amabel</div>
    </div>

    <div class="right flex items-center">
      <a href="https://github.com/Amabel" target="_blank">
        <svg
          class="logo github w-6 h-6"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 32.58 31.77"
        >
          <path
            class="cls-1"
            d="M16.29,0a16.29,16.29,0,0,0-5.15,31.75c.82.15,1.11-.36,1.11-.79s0-1.41,0-2.77C7.7,29.18,6.74,26,6.74,26a4.36,4.36,0,0,0-1.81-2.39c-1.47-1,.12-1,.12-1a3.43,3.43,0,0,1,2.49,1.68,3.48,3.48,0,0,0,4.74,1.36,3.46,3.46,0,0,1,1-2.18c-3.62-.41-7.42-1.81-7.42-8a6.3,6.3,0,0,1,1.67-4.37,5.94,5.94,0,0,1,.16-4.31s1.37-.44,4.48,1.67a15.41,15.41,0,0,1,8.16,0c3.11-2.11,4.47-1.67,4.47-1.67A5.91,5.91,0,0,1,25,11.07a6.3,6.3,0,0,1,1.67,4.37c0,6.26-3.81,7.63-7.44,8a3.85,3.85,0,0,1,1.11,3c0,2.18,0,3.94,0,4.47s.29.94,1.12.78A16.29,16.29,0,0,0,16.29,0Z"
          />
        </svg>
      </a>

      <a href="https://www.wantedly.com/id/luoweibinb" target="_blank">
        <svg
          class="logo wantedly ml-4 w-10 h-10"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 500 394"
        >
          <circle class="cls-1" cx="375" cy="122.95" r="38.98" />
          <path
            class="cls-2"
            d="M217.17,234.77c-2.34-1.52-9-10.45-27.42-54.44-1.15-2.76-2.22-5.14-3.23-7.18l-3.77-9.08L150.47,86.12H85.89l32.29,77.95,32.29,78,29.82,72a2.68,2.68,0,0,0,4.94,0l32.45-77.68A1.34,1.34,0,0,0,217.17,234.77Z"
          />
          <path
            class="cls-2"
            d="M338.15,234.77c-2.34-1.52-9-10.45-27.42-54.44-1.15-2.76-2.23-5.14-3.24-7.19l-3.75-9.07L271.45,86.12H206.87l32.29,77.95,32.29,78,29.82,72a2.68,2.68,0,0,0,4.94,0l32.45-77.67A1.36,1.36,0,0,0,338.15,234.77Z"
          />
        </svg>
      </a>
      <div class="ml-4">
        <Hamburger :active="submenuActive" @toggle-active="toggleSubmenu" />
      </div>

      <div
        class="dropdown"
        :class="{ inactive: !submenuActive }"
        v-click-outside="closeDropdown"
      >
        <nav id="menu">
          <div class="nav-item">
            <span class="link-text" data-menuanchor="about"
              ><a href="#about">About</a></span
            >
          </div>
          <div class="nav-item">
            <span class="link-text" data-menuanchor="skills"
              ><a href="#skills">Skills</a></span
            >
          </div>
          <div class="nav-item">
            <span class="link-text" data-menuanchor="timeline"
              ><a href="#timeline">Timeline</a></span
            >
          </div>
          <div class="nav-item">
            <span class="link-text" data-menuanchor="activity"
              ><a href="#activity">Activity</a></span
            >
          </div>
        </nav>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from '@vue/reactivity';
import Avatar from './Avatar.vue';
import Hamburger from './Hamburger.vue';

const submenuActive = ref(false);
const toggleSubmenu = (open) => {
  submenuActive.value = open;
};

const closeDropdown = () => {
  submenuActive.value = false;
};
</script>

<style scoped>
.top-nav {
  position: fixed;
  top: 0;
  left: 0;
  background: #141521;
  z-index: 10;
}

.top-nav .left .text {
  position: relative;
  top: 3px;
}

.right .logo {
  fill: #ffffffde;
  cursor: pointer;
}

.right .logo.wantedly .cls-1 {
  fill: #21bddb;
}

.dropdown {
  position: absolute;
  top: 0;
  right: 0px;
  margin-top: 64px;
  width: 176px;
  background-color: rgba(0, 0, 0, 0.45);
  border-bottom-left-radius: 24px;
  opacity: 1;
  transition: opacity 1s;
}

.dropdown.inactive {
  opacity: 0;
  overflow: hidden;
}

.dropdown .nav-item {
  @apply flex justify-center items-center h-12 text-lg;
  opacity: 1;
  transition: opacity 1s;
}

.dropdown.inactive .nav-item {
  opacity: 0;
}

.dropdown .nav-item .link-text.active {
  color: #c3f8ff;
}
</style>
