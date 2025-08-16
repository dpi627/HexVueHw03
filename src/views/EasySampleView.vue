<template>
  <div class="container">
    <EasyHeader />
    <div class="row g-4">
      <div class="col-4" v-for="i in 6" :key="i">
        <EasyCard />
      </div>
    </div>
    <EasyFooter />
  </div>
</template>

<script setup>
import EasyHeader from '@/components/EasyHeader.vue';
import EasyFooter from '@/components/EasyFooter.vue';
// import EasyCard from '@/components/EasyCard.vue';
</script>