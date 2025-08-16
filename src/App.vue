<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <RouterLink class="me-4" to="/">Home</RouterLink>
  <RouterLink class="me-4" to="/about">About</RouterLink>
  <RouterLink class="me-4" to="/ezsample">EazySample </RouterLink>
  <RouterLink class="me-4" to="/cart">Cart</RouterLink>

  <RouterView />
</template>

<style scoped></style>
