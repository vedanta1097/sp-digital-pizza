<template>
<div class="flex p-2 gap-2 rounded-lg bg-secondary">
  <img :src="cart?.item?.image" :alt="cart?.item?.image" width="120">
  <div class="flex flex-col gap-2">
    <p class="font-semibold text-gray-80">{{ cart?.item?.name }}</p>
    <p class="text-gray-80 text-xs flex grow">{{ toppingList }}</p>
    <p class="text-gray-80">${{ cart?.totalPrice }}</p>
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

const toppingList = computed(() => {
  if (props.cart.toppings.length > 0) {
    return props.cart.toppings.map(t => t.name).join(', ')
  }
  return 'No Toppings'
})
</script>
