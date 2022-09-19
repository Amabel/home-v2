<template>
  <div class="nav hidden md:inline-flex justify-between w-64 h-screen">
    <div class="flex flex-col items-center pt-8 pb-16 w-full">
      <Avatar />
      <div class="text-xl font-bold">Amabel</div>
      <div>Software Engineer</div>

      <nav id="menu" class="mt-32">
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
          <span class="link-text" data-menuanchor="work"
            ><a href="#work">Work</a></span
          >
        </div>
        <div class="nav-item">
          <span class="link-text" data-menuanchor="activity"
            ><a href="#activity">Activity</a></span
          >
        </div>
      </nav>

      <div class="footer flex justify-center items-center px-8 mt-auto w-full">
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
      </div>
    </div>
    <div class="divider"></div>
  </div>
</template>

<script setup>
import Avatar from './Avatar.vue';
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
  background: linear-gradient(to right, #c3f8ff, #c3f8ff 50%, #ffffffde 50%);
  background-size: 200% 100%;
  background-position: 100%;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  transition: background-position 0.375s ease;
  text-decoration: none;
}

.link-text.active {
  color: #c3f8ff;
  -webkit-text-fill-color: unset;
}

.link-text::before {
  content: '';
  position: absolute;
  width: 100%;
  height: 2px;
  border-radius: 0px;
  background-color: #c3f8ff;
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
  fill: #c3f8ff;
}

.footer .logo.wantedly .cls-1 {
  fill: #21bddb;
}

.footer .logo.wantedly:hover .cls-2 {
  fill: #c3f8ff;
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
</style>
