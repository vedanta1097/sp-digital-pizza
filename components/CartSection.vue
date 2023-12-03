<template>
  <div class="flex flex-col w-[550px] min-h-screen bg-gray-0 py-10 px-4 gap-4">
    <h2 class="text-3xl text-primary">Cart</h2>
    <div v-if="carts.length === 0" class="flex grow items-center text-center justify-center">
      <p class="text-gray-10">
        The shopping cart is still empty,
        <br> click item to add to cart
      </p>
    </div>
    <div v-else class="flex flex-col gap-4 grow">
      <CartItem
        v-for="(cart, index) in carts"
        :key="index"
        :cart="cart"
        @remove-cart="emit('removeCart', $event)"
      />
    </div>
    <div class="flex justify-between bg-primary rounded-lg py-4 px-5">
      <p class="font-bold text-white">Total</p>
      <p class="font-bold text-white">${{ totalPrice }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { type CartType } from '~/types/cart-type'

const props = withDefaults(
  defineProps<{
    carts: CartType[]
  }>(),
  {
    carts: () => []
  }
)

const emit = defineEmits<{
  (e: 'removeCart', value: number): void
}>()

const totalPrice = computed(() => props.carts.reduce((acc, curr) => acc + curr.totalPrice, 0))
</script>
