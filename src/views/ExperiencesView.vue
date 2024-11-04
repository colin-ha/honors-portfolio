<script setup lang="ts"></script>

<template>
  <div class="experience-container">
    <h1 class="hello">Experiences</h1>
  </div>
</template>

<style scoped>
.hello {
  font-size: 6rem;
  background: linear-gradient(
    45deg,
    var(--color-gradient-start),
    var(--color-gradient-end),
    var(--color-gradient-hover-start),
    var(--color-gradient-hover-end)
  );
  background-size: 200% 200%;
  background-position: left center;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-left: 15px;
  transition:
    background-position 3s ease,
    font-weight 0.5s ease;
  font-weight: 300;
  text-align: center;
}

.hello:hover {
  background-position: right center;
  font-weight: 600;
}
</style>
