import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useOrderStore = defineStore('order', () => {
  const orderId = ref(0)
  const items = ref([])
  const memo = ref('')

  const create = (cart) => {
    orderId.value = new Date().getTime()
    items.value = cart.items
    memo.value = cart.memo
  }

  const totalPrice = computed(() => {
    return items.value.reduce((total, item) => total + item.price * item.quantity, 0)
  })

  return {
    orderId,
    items,
    memo,
    create,
    totalPrice,
  }
})
