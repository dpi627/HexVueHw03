import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useCartStore = defineStore('cart', () => {
  const items = ref([])
  const memo = ref('')

  const addItem = (item) => {
    if (items.value.some((i) => i.id === item.id)) {
      alert('品項重複')
      return
    }
    items.value.push({
      ...item,
      quantity: 1,
      subtotal: item.price,
    })
  }

  const removeItem = (item) => {
    const index = items.value.findIndex((i) => i.id === item.id)
    if (index === -1) return
    items.value.splice(index, 1)
  }

  const resetSubtotal = (item) => {
    const currentItem = items.value.find((i) => i.id === item.id)
    if (currentItem) {
      currentItem.subtotal = currentItem.price * currentItem.quantity
    }
  }

  const totalPrice = computed(() => {
    return items.value.reduce((total, item) => total + item.price * item.quantity, 0)
  })

  const totalCount = computed(() => {
    return items.value ? items.value.length : 0
  })

  const clear = () => {
    items.value = []
  }

  return {
    items,
    memo,
    addItem,
    removeItem,
    resetSubtotal,
    totalPrice,
    totalCount,
    clear,
  }
})
