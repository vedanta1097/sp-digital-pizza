<template>
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
        @click="emit('selectPizza', pizza)"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { PIZZAS } from '~/constants/pizzas'
import { type PizzaType } from '~/types/pizza-type'

const emit = defineEmits<{
  (e: 'selectPizza', value: PizzaType): void
}>()
</script>
