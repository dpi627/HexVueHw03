<template>
  <div class="container">
    <EasyHeader />
    <EasyCard :inner-data="data" :value="extraVal" />
    <!-- <div class="row g-4">
      <div class="col-4" v-for="i in 6" :key="i">
        <EasyCard />
      </div>
    </div> -->
    <EasyFooter />
  </div>
</template>

<script setup>
import { ref } from 'vue';
import EasyHeader from '@/components/EasyHeader.vue';
import EasyFooter from '@/components/EasyFooter.vue';
import EasyCard from '@/components/EasyCard.vue';

const data = ref({
  title: 'My Title',
  imgUrl: 'https://images.unsplash.com/photo-1755217908514-785dbc5ad381?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyfHx8ZW58MHx8fHx8',
  description: 'This is a description',
});

const extraVal = ref('額外資訊');
</script>