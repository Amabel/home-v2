<template>
  <div
    class="top-nav flex justify-between items-center px-4 md:hidden w-full h-16"
  >
    <div class="left flex items-center">
      <Avatar />
      <div class="text ml-4 text-xl font-bold">Amabel</div>
    </div>

    <div class="right flex items-center">
      <a href="https://github.com/Amabel/home-v2" target="_blank">
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

      <div class="ml-4">
        <Hamburger :active="submenuActive" @toggle-active="toggleSubmenu" />
      </div>

      <div
        class="dropdown pb-4"
        :class="{ hidden: dropdownHidden, inactive: !submenuActive }"
        v-click-outside="closeDropdown"
      >
        <nav id="menu">
          <div class="nav-item">
            <span class="link-text" data-menuanchor="bio"
              ><a href="#bio">Bio</a></span
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

          <div class="nav-item mt-4">
            <div class="scale-[0.65]">
              <ThemeToggle />
            </div>
          </div>
        </nav>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, nextTick } from 'vue';
import Avatar from './Avatar.vue';
import Hamburger from './Hamburger.vue';
import ThemeToggle from './ThemeToggle.vue';

const submenuActive = ref(false);
const dropdownHidden = ref(true);
const toggleSubmenu = (open) => {
  open ? openMenu() : closeMenu();
};

const closeDropdown = (event) => {
  if (!submenuActive.value) {
    return;
  }

  // NOTE: 点击hamburger按钮的情况除外，否则会导致多次触发
  // NOTE: 点击themeToggle按钮的情况除外，否则会导致意外关闭
  // （可能是由于v-click-outside将子组件判定为外部区域）
  const className = event.target.className;
  if (
    className &&
    (className.includes('hamburger-area') ||
      className.includes('onoffswitch-checkbox'))
  ) {
    return;
  }

  closeMenu();
};

let timer = null;
const openMenu = async () => {
  dropdownHidden.value = false;
  // NOTE: 打开菜单时，同时删除hidden和inactive class会导致菜单瞬间出现
  // 因此把删除inactive class的操作放到macrotask队列中
  await nextTick();
  timer && clearTimeout(timer);
  setTimeout(() => {
    submenuActive.value = true;
  });
};

const closeMenu = async () => {
  submenuActive.value = false;
  await nextTick();
  timer && clearTimeout(timer);
  // NOTE: 配合动画效果延迟1秒后隐藏
  timer = setTimeout(() => {
    dropdownHidden.value = true;
  }, 1000);
};
</script>

<style scoped>
.top-nav {
  position: fixed;
  top: 0;
  left: 0;
  background: var(--bg-color);
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
  width: 196px;
  background-color: rgba(20, 21, 33, 0.95);
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
  color: var(--primary-color);
}
</style>
