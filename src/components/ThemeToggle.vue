<template>
  <div class="onoffswitch">
    <input
      type="checkbox"
      name="onoffswitch"
      class="onoffswitch-checkbox input-dark"
      id="myonoffswitch"
      :checked="darkMode"
      @change="toggleTheme"
    />
    <label class="onoffswitch-label" for="myonoffswitch"></label>
  </div>
</template>

<script setup>
import { darkMode } from '../store';

const toggleTheme = ($event) => {
  darkMode.value = $event.target.checked;
};
</script>

<style scss>
.onoffswitch {
  position: relative;
  width: 76px;
}
.onoffswitch-checkbox {
  display: none;
}
.onoffswitch-label {
  display: block;
  overflow: hidden;
  cursor: pointer;
  height: 28px;
  padding: 0;
  line-height: 28px;
  border: 0px solid #e3e3e3;
  border-radius: 45px;
  background-color: #d8d4d4;
}
.onoffswitch-label:before {
  content: '';
  display: block;
  width: 45px;
  margin: -8.5px;
  background: #e2e0e0;
  background-image: url(../assets/sun.png);
  transition: 0.8s;
  background-repeat: no-repeat;
  background-position: center;
  position: absolute;
  top: 0;
  bottom: 0;
  right: 44px;
  border-radius: 45px;
  box-shadow: 0 6px 12px 0px #757575;
}
.onoffswitch-checkbox:checked + .onoffswitch-label {
  background-color: #2c3159;
}
.onoffswitch-checkbox:checked + .onoffswitch-label,
.onoffswitch-checkbox:checked + .onoffswitch-label:before {
  border-color: black;
}
.onoffswitch-checkbox:checked + .onoffswitch-label .onoffswitch-inner {
  margin-left: 0;
}
.onoffswitch-checkbox:checked + .onoffswitch-label:before {
  right: 0px;
  background-image: url(../assets/moon.png);
  background-repeat: no-repeat;
  background-position: center;
  background-color: #2d325a;
  box-shadow: 3px 6px 18px 0px rgba(0, 0, 0, 0.2);
}
</style>
