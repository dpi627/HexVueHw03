import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import Swal from 'sweetalert2'

export const useCartStore = defineStore('cart', () => {
  const items = ref([])
  const memo = ref('')

  const addItem = (item) => {
    if (items.value.some((i) => i.id === item.id)) {
      Swal.fire({
        title: '品項重複',
        text: `[${item.name}] 已存在購物車`,
        icon: 'warning',
        confirmButtonText: '確定',
      })
      return
    }
    items.value.push({
      ...item,
      quantity: 1,
      subtotal: item.price,
    })

    Swal.fire({
      title: `[${item.name}] 加入購物車`,
      text: `體驗 "${item.description}"`,
      icon: 'success',
      timer: 1500,
      toast: true,
      position: 'bottom-end',
      showConfirmButton: false,
      timerProgressBar: true,
    })
  }

  const removeItem = async (item) => {
    const result = await Swal.fire({
      title: '確定移除？',
      text: `確定要移除 ${item.name} 嗎？`,
      icon: 'question',
      showCancelButton: true,
      confirmButtonText: '確定',
      cancelButtonText: '取消',
    })

    if (result.isConfirmed) {
      const index = items.value.findIndex((i) => i.id === item.id)
      if (index === -1) return
      items.value.splice(index, 1)
    }
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
