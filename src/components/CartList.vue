<template>
  <template v-if="cart.totalCount">
    <table class="table">
      <thead>
        <tr>
          <th scope="col" width="50">操作</th>
          <th scope="col">品項</th>
          <th scope="col">描述</th>
          <th scope="col" width="90">數量</th>
          <th scope="col">單價</th>
          <th scope="col">小計</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in cart.items" :key="item.id" class="align-middle">
          <td>
            <button type="button" class="btn btn-sm" @click="cart.removeItem(item)">x</button>
          </td>
          <td>{{ item.name }}</td>
          <td><small>{{ item.description }}</small></td>
          <td>
            <select class="form-select" v-model="item.quantity" @change="cart.resetSubtotal(item)">
              <option v-for="i in 10" :key="i" :value="i">
                {{ i }}
              </option>
            </select>
          </td>
          <td>{{ item.price }}</td>
          <td>{{ item.subtotal }}</td>
        </tr>
      </tbody>
    </table>
    <div class="text-end mb-3">
      <h5>總計: <span>${{ cart.totalPrice }}</span></h5>
    </div>
    <textarea v-model="cart.memo" class="form-control mb-3" rows="3" placeholder="備註"></textarea>
    <div class="mb-2">
      <span v-for="sample in memoSamples" :key="sample.text" class="me-2">
        <a href="#" @click.prevent="addMemoSample(sample.text)" class="btn btn-outline-primary btn-sm p-0 ps-1 pe-1">
          {{ sample.text }}
        </a>
      </span>
    </div>
    <div class="text-end">
      <button @click.prevent="createOrder" class="btn btn-primary">送出</button>
    </div>
  </template>
  <div v-else class="alert alert-primary text-center">請選擇品項</div>
</template>

<script setup>
import { ref } from 'vue'
import { useCartStore } from '@/stores/cart'
import { useOrderStore } from '@/stores/order'

const cart = useCartStore()
const order = useOrderStore()

const createOrder = () => {
  order.create(cart)
  cart.clear()
}

const memoSamples = ref([
  { "text": "不需餐具" },
  { "text": "自備提袋" },
  { "text": "全部微微" },
])

const addMemoSample = (memo) => {
  cart.memo += (cart.memo) ? `, ${memo}` : memo
}
</script>