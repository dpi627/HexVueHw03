<template>
  <div id="root">
    <div class="container mt-5">
      <div class="row">
        <div class="col-md-4">
          <div class="list-group" v-for="drink in drinks" :key="drink.id">
            <a href="#" @click.prevent="cart.addItem(drink)" class="list-group-item list-group-item-action">
              <div class="d-flex w-100 justify-content-between">
                <h5 class="mb-1">{{ drink.name }}</h5>
                <small>${{ drink.price }}</small>
              </div>
              <p class="mb-1">{{ drink.description }}</p>
            </a>
          </div>
        </div>
        <div class="col-md-8">
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
                <tr v-for="item in cart.items" :key="item.id">
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
                <a href="#" @click.prevent="addMemoSample(sample.text)"
                  class="btn btn-outline-primary btn-sm p-0 ps-1 pe-1">
                  {{ sample.text }}
                </a>
              </span>
            </div>
            <div class="text-end">
              <button @click.prevent="createOrder" class="btn btn-primary">送出</button>
            </div>
          </template>
          <div v-else class="alert alert-primary text-center">請選擇品項</div>
        </div>
      </div>
      <hr />
      <div class="row justify-content-center">
        <div class="col-8">
          <div class="card" v-if="order.orderId">
            <div class="card-body">
              <div class="card-title">
                <h5>訂單</h5>
                <small class="text-end text-primary">#{{ order.orderId }}</small>
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
                <fieldset v-if="order.memo" class="form-grop border border-primary rounded p-2">
                  <legend class="col-form-label fs-6">備註:</legend>
                  <span class="ps-3">{{ order.memo }}</span>
                </fieldset>
                <div class="text-end mt-4">
                  <h5>總計: <span>${{ order.totalPrice }}</span></h5>
                </div>
              </div>
            </div>
          </div>
          <div v-else class="alert alert-secondary text-center">尚未建立訂單</div>
        </div>
      </div>
    </div>
  </div>
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

const drinks = ref([
  {
    "id": 1,
    "name": "珍珠奶茶",
    "description": "香濃奶茶搭配QQ珍珠",
    "price": 50
  },
  {
    "id": 2,
    "name": "冬瓜檸檬",
    "description": "清新冬瓜配上新鮮檸檬",
    "price": 45
  },
  {
    "id": 3,
    "name": "翡翠檸檬",
    "description": "綠茶與檸檬的完美結合",
    "price": 55
  },
  {
    "id": 4,
    "name": "四季春茶",
    "description": "香醇四季春茶，回甘無比",
    "price": 45
  },
  {
    "id": 5,
    "name": "阿薩姆奶茶",
    "description": "阿薩姆紅茶搭配香醇鮮奶",
    "price": 50
  },
  {
    "id": 6,
    "name": "檸檬冰茶",
    "description": "檸檬與冰茶的清新組合",
    "price": 45
  },
  {
    "id": 7,
    "name": "芒果綠茶",
    "description": "芒果與綠茶的獨特風味",
    "price": 55
  },
  {
    "id": 8,
    "name": "抹茶拿鐵",
    "description": "抹茶與鮮奶的絕配",
    "price": 60
  }
])

</script>