<template>
  <a href="https://github.com/Amabel" target="_blank">
    <img
      class="avatar m-6 w-36 h-36 rounded-full border-[#C3F8FF] hover:animate-spin cursor-pointer"
      src="https://avatars.githubusercontent.com/u/12688422?v=4"
      alt="avatar"
    />
  </a>
  <div class="text-xl font-bold">Amabel</div>
  <div>Software Engineer</div>
</template>

<script setup></script>

<style scoped>
.avatar {
  border: 4px solid #7fbcd2;
}

.avatar:hover {
  animation: pulse 2s infinite;
}

@keyframes pulse {
  0% {
    box-shadow: 0 0 0 0 rgba(127, 188, 210, 0.7);
  }

  70% {
    box-shadow: 0 0 0 15px rgba(127, 188, 210, 0);
  }

  100% {
    box-shadow: 0 0 0 0 rgba(127, 188, 210, 0);
  }
}
</style>
