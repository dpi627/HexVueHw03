<template>
  <div class="container">
    <div class="row">
      <h2>Cart Items</h2>
      <ul>
        <li v-for="(item, index) in cart.items" :key="index">
          {{ item.name }} - {{ item.price }}
          <button @click="cart.removeItem(item)">Remove</button>
        </li>
      </ul>
      <p>Total: {{ cart.totalPrice }}</p>
    </div>
  </div>
</template>

<script setup>
import { useCartStore } from '@/stores/cart'

const cart = useCartStore()
</script>