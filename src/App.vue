<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <nav>
      <RouterLink to="/" active-class="active"><span>Home</span></RouterLink>
      <RouterLink to="/about" active-class="active"><span>About Me</span></RouterLink>
      <RouterLink to="/experiences" active-class="active"><span>Experiences</span></RouterLink>
      <RouterLink to="/honors-plan" active-class="active"><span>Honors Plan Development</span></RouterLink>
      <RouterLink to="/philosophy" active-class="active"><span>Philosophy</span></RouterLink>
    </nav>
  </header>

  <RouterView />
</template>

<style scoped>
header {
  position: fixed;
  top: 10px;
  left: 50%;
  transform: translateX(-50%);
  background: rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(10px);
  border-radius: 25px;
  padding: 1rem 2rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  z-index: 1000;
}

nav {
  display: flex;
  gap: 1rem;
}

a {
  color: var(--color-text);
  text-decoration: none;
  font-weight: normal;
  position: relative;
  padding: 0.5rem 1rem;
  border-radius: 12px;
  overflow: hidden;
}

a span {
  position: relative;
  z-index: 1;
}

a::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(45deg, #ff6ec4, #7873f5);
  border-radius: 12px;
  transform: scale(0);
  transition: transform 0.1s ease-in-out;
  z-index: 0;
}

a:hover::before {
  transform: scale(1);
  border: solid 2px var(--color-heading);
}

a:hover {
  font-weight: bolder !important;
}

.active {
  font-weight: bolder;
  color: var(--color-heading);
  position: relative;
}

.active::after {
  content: '';
  position: absolute;
  bottom: -5px;
  left: 50%;
  transform: translateX(-50%);
  width: 80%;
  height: 4px;
  background: var(--color-heading);
  border-radius: 2px;
}
</style>
