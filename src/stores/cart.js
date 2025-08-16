import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useCartStore = defineStore('cart', () => {
  const items = ref([])

  const addItem = (product) => {
    items.value.push(product)
  }

  const removeItem = (key) => {
    items.value.splice(key, 1)
  }

  const totalPrice = computed(() => {
    return items.value.reduce((total, item) => total + item.price, 0)
  })

  return { items, addItem, removeItem, totalPrice }
})
