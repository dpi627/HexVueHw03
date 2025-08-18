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
      <a href="#" class="btn btn-primary" @click.prevent="changeOutterTitle">
        Go somewhere
      </a>
      <br />
      <a href="#" @click.prevent="emit('emit-title', '另一個內層修改')">Click</a>
    </div>
  </div>
</template>

<script setup>
import { defineProps, defineEmits } from 'vue';

defineProps(['innerData', 'value']);

// 定義事件名稱
const emit = defineEmits(['emit-title']);

// 定義方法
const changeOutterTitle = () => {
  console.log('內層觸發 emit')
  emit('emit-title', '內層送出的修改')
}
</script>