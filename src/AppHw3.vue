<template>
  <div id="root">
    <div class="container mt-5">
      <div class="row">
        <div class="col-md-4">
          <ProductList />
        </div>
        <div class="col-md-8">
          <CartList />
        </div>
      </div>
      <hr />
      <div class="row justify-content-center">
        <div class="col-8">
          <OrderInfo />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import ProductList from './components/ProductList.vue'
import OrderInfo from './components/OrderInfo.vue'
import CartList from './components/CartList.vue'
</script>