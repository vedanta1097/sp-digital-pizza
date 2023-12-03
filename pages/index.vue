<template>
  <div class="flex min-h-screen">
    <div class="bg-white pt-10 px-12 w-full">
      <h2 class="text-3xl text-gray-10 mb-6">Pizza List</h2>
      <div class="flex flex-wrap gap-4">
        <PizzaCard
          v-for="pizza in PIZZAS"
          :key="pizza.name"
          :name="pizza.name"
          :initial-price="pizza.initialPrice"
          :price="pizza.price"
          :image="pizza.image"
        />
      </div>
    </div>
    <div class="flex flex-col w-[550px] h-screen bg-gray-0 py-10 px-4">
      <h2 class="text-3xl text-gray-10">Cart</h2>
      <div class="flex grow items-center text-center justify-center">
        <p class="text-gray-10">
          The shopping cart is still empty,
          <br> click item to add to cart
        </p>
      </div>
      <div class="flex justify-between bg-gray-5 rounded py-4 px-5">
        <p class="font-bold text-gray-10">Total</p>
        <p class="font-bold text-gray-10">$0</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import PizzaCard from '~/components/PizzaCard.vue'
import { PIZZAS } from '~/constants/pizzas'
</script>
