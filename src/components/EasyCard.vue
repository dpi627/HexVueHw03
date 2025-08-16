<template>
  <div class="card">
    <img :src="innerData.imgUrl" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">{{ innerData.title }}</h5>
      <p class="card-text">
        {{ innerData.description }}
        <br />
        {{ value }}
        <br />
        <code>
          <pre>
{{ innerData }}
          </pre>
        </code>
      </p>
      <a href="#" class="btn btn-primary">
        Go somewhere
      </a>
    </div>
  </div>
</template>

<script setup>
import { defineProps } from 'vue';

defineProps(['innerData', 'value']);
</script>