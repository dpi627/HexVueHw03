<template>
  <div class="card">
    <img :src="content.imgUrl" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">{{ content.title }}</h5>
      <p class="card-text">
        {{ content.description }}
        <br />
        <code>
          <pre>
{{ content }}
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

defineProps(['content']);
</script>