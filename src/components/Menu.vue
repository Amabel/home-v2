<template>
  <div class="nav hidden md:inline-flex justify-between w-64 h-screen">
    <div class="nav-wrapper flex flex-col items-center pt-8 pb-16 w-full">
      <Avatar />
      <div class="text-xl font-bold">Amabel</div>
      <div>Software Engineer</div>

      <nav id="menu" class="menu-wrapper mt-8">
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
      </nav>

      <div class="mt-8 scale-[0.75]">
        <ThemeToggle />
      </div>

      <div class="footer flex justify-center items-center px-8 mt-auto w-full">
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
      </div>
    </div>
    <div class="divider"></div>
  </div>
</template>

<script setup>
import Avatar from './Avatar.vue';
import ThemeToggle from './ThemeToggle.vue';
</script>

<style scoped>
.nav {
  position: fixed;
}

.nav-item {
  @apply p-4 text-lg font-extrabold cursor-pointer;
}

.link-text {
  position: relative;
  background: linear-gradient(
    to right,
    var(--primary-color),
    var(--primary-color) 50%,
    #ffffffde 50%
  );
  background-size: 200% 100%;
  background-position: 100%;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  transition: background-position 0.375s ease;
  text-decoration: none;
}

.link-text.active {
  color: var(--primary-color);
  -webkit-text-fill-color: unset;
}

.link-text::before {
  content: '';
  position: absolute;
  width: 100%;
  height: 2px;
  border-radius: 0px;
  background-color: var(--primary-color);
  bottom: 0px;
  left: 0;
  transform-origin: right;
  transform: scaleX(0);
  transition: transform 0.3s ease-in-out;
}

.link-text:hover {
  background-position: 0 100%;
}

.link-text:hover::before {
  transform-origin: left;
  transform: scaleX(1);
}

.footer .logo {
  fill: #ffffffde;
  cursor: pointer;
}

.footer .logo path {
  transition: fill 1s;
}

.footer .logo.github:hover .cls-1 {
  fill: var(--primary-color);
}

.footer .logo.wantedly .cls-1 {
  fill: #21bddb;
}

.footer .logo.wantedly:hover .cls-2 {
  fill: var(--primary-color);
}

.divider {
  width: 1px;
  height: 100vh;
  background: rgb(20, 21, 33);
  background: linear-gradient(
    180deg,
    rgba(20, 21, 33, 0) 0%,
    rgba(195, 248, 255, 0.298) 23%,
    rgba(20, 21, 33, 0) 100%
  );
}

@media (max-height: 756px) {
  .nav-wrapper {
    @apply pt-4;
  }

  .menu-wrapper {
    @apply mt-4;
  }

  .nav-item {
    @apply p-2 text-base;
  }

  .footer {
    @apply mt-12;
  }
}
</style>
