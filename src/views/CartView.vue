<template>
  <div class="container">
    <div class="row mb-4">
      <h2>Products</h2>
      <div class="col-4 g-4" v-for="item in data.products" :key="item.id">
        <h5>{{ item.name }}</h5>
        <p>Price: {{ item.price }}</p>
        <button @click="cart.addItem(item)">Add to Cart</button>
      </div>
    </div>
    <div class="row">
      <h2>Cart Items</h2>
      <div class="col-4 g-2" v-for="(item, index) in cart.items" :key="index">
        [{{ index + 1 }}] {{ item.name }}
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useCartStore } from '@/stores/cart'

const cart = useCartStore()

const data = ref({
  products: [
    { id: 1, name: 'Product A', price: 100 },
    { id: 2, name: 'Product B', price: 150 },
    { id: 3, name: 'Product C', price: 200 }
  ]
})
</script>