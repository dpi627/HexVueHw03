<template>
  <div class="card" v-if="order.orderId">
    <div class="card-body">
      <div class="card-title">
        <div class="d-flex w-100 justify-content-between">
          <h5>訂單</h5>
          <small class="text-end text-primary">#{{ order.orderId }}</small>
        </div>
        <table class="table">
          <thead>
            <tr>
              <th scope="col">品項</th>
              <th scope="col" class="text-end">數量</th>
              <th scope="col" class="text-end">小計</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in order.items" :key="item.id">
              <td>{{ item.name }}</td>
              <td class="text-end">{{ item.quantity }}</td>
              <td class="text-end">{{ item.subtotal }}</td>
            </tr>
          </tbody>
        </table>
        <fieldset v-if="order.memo" class="form-grop border border-primary rounded ps-2 pb-2">
          <legend class="col-form-label"><small>備註:</small></legend>
          <small class="ps-3">{{ order.memo }}</small>
        </fieldset>
        <div class="text-end mt-3">
          <h5>總計: <span>$ {{ order.totalPrice }}</span></h5>
        </div>
      </div>
    </div>
  </div>
  <div v-else class="alert alert-secondary text-center">尚未建立訂單</div>
</template>

<script setup>
import { useOrderStore } from '@/stores/order'

const order = useOrderStore()
</script>