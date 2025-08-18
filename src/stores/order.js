import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import Swal from 'sweetalert2'

export const useOrderStore = defineStore('order', () => {
  const orderId = ref(0)
  const items = ref([])
  const memo = ref('')

  const create = (cart) => {
    orderId.value = new Date().getTime()
    items.value = cart.items
    memo.value = cart.memo

    Swal.fire({
      title: '成功建立訂單',
      text: `訂單 [#${orderId.value}] 已建立`,
      icon: 'success',
      timer: 1500,
      timerProgressBar: true,
      showConfirmButton: false,
    })
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
