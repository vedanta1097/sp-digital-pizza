<template>
  <div class="flex w-[250px] cursor-pointer">
    <div class="flex flex-col p-2 gap-4 bg-gray-0 items-center rounded-xl">
      <div class="flex justify-center w-full rounded-lg bg-gradient-to-b from-secondary to-white">
        <img :src="image" :alt="name" width="150">
      </div>
      <div class="px-6 grow">
        <p class="font-semibold text-primary text-center">{{ name }}</p>
      </div>
      <div class="flex gap-2">
        <p v-if="hasDiscount(initialPrice, price)" class="line-through text-gray-10">${{ initialPrice }}</p>
        <p class="text-gray-80">${{ price }}</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
withDefaults(
  defineProps<{
    name: string
    initialPrice: number
    price: number
    image: string
  }>(),
  {
    name: '',
    initialPrice: 0,
    price: 0,
    image: ''
  }
)

function hasDiscount(initialPrice: number, price: number) {
  return initialPrice > price
}
</script>
