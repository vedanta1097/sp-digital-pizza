<template>
  <div class="flex min-h-screen">
    <PizzaList @select-pizza="chooseToppings" />
    <CartSection
      :carts="carts"
      @remove-cart="removeCart"
    />
    <ToppingsModal
      :is-active="isActive"
      @add-to-cart="addToCart"
      @update:is-active="isActive = !isActive"
    />
  </div>
</template>

<script setup lang="ts">
import { type PizzaType } from '~/types/pizza-type'
import { type ToppingType } from '~/types/topping-type'
import { type CartType } from '~/types/cart-type'
import PizzaList from '~/components/PizzaList.vue'
import CartSection from '~/components/CartSection.vue'
import ToppingsModal from '~/components/ToppingsModal.vue'

const isActive = ref(false)
const selectedPizza = ref<PizzaType>()
const carts = ref<CartType[]>([])

function chooseToppings(pizza: PizzaType) {
  selectedPizza.value = pizza
  isActive.value = true
}

function addToCart(toppings: ToppingType[]) {
  if (selectedPizza.value?.name) {
    carts.value = [
      ...carts.value,
      {
        id: carts.value.length > 0 ? carts.value[carts.value.length - 1].id + 1 : 1,
        item: selectedPizza.value,
        toppings: toppings,
        totalPrice: toppings.reduce((acc, curr) => acc + curr.price, selectedPizza.value?.price || 0)
      }
    ]
    selectedPizza.value = undefined
  }
}

function removeCart(id: number) {
  carts.value = carts.value.filter(cart => cart.id !== id)
}
</script>
