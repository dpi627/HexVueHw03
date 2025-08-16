import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useCartStore = defineStore('cart', () => {
  const items = ref([])

  const totalCount = computed(() => items.value.length)

  const addItem = (product) => {
    items.value.push(product)
  }

  const removeItem = (key) => {
    items.value.splice(key, 1)
  }

  return { items, addItem, removeItem, totalCount }
})
