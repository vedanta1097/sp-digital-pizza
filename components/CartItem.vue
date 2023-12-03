<template>
<div v-if="cart?.id" class="flex p-2 gap-2 rounded-lg bg-secondary">
  <img :src="cart.item.image" :alt="cart.item.image" width="120">
  <div class="flex flex-col gap-2 w-full">
    <p class="font-semibold text-gray-80">{{ cart.item.name }}</p>
    <p class="text-gray-80 text-xs flex grow">{{ toppingList }}</p>
    <div class="flex justify-between items-center">
      <p class="text-gray-80">${{ cart.totalPrice }}</p>
      <button
        class="bg-red-500 hover:bg-red-600 text-white p-1 rounded-full items-center text-xs"
        @click="emit('removeCart', cart.id)"
      >
        <img src="/img/trash-can.png" width="16" alt="remove">
      </button>
    </div>
  </div>
</div>
</template>

<script setup lang="ts">
import { type CartType } from '~/types/cart-type'

const props = withDefaults(
  defineProps<{
    cart: CartType
  }>(),
  {
    cart: undefined
  }
)

const emit = defineEmits<{
  (e: 'removeCart', value: number): void
}>()

const toppingList = computed(() => {
  if (props.cart.toppings.length > 0) {
    return props.cart.toppings.map(t => t.name).join(', ')
  }
  return 'No Toppings'
})
</script>
