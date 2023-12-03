<template>
  <Teleport to="body">
    <Transition>
      <div v-if="modalVisible">
        <div class="overlay">
          <div
            class="overlay__scrim"
            @click="closeModal"
          />
          <div class="w-full max-w-lg p-[24px] relative m-auto bg-white rounded-md z-30">
            <div class="flex flex-col gap-4">
              <h2 class="text-2xl text-gray-10">Toppings</h2>
              <div class="grid grid-cols-3 gap-2">
                <div v-for="topping in TOPPINGS">
                  <input
                    type="checkbox"
                    :id="topping.name"
                    :value="topping"
                    v-model="selectedToppings"
                  >
                  <label :for="topping.name" class="ml-2 text-gray-80 text-sm">
                    {{ topping.name }} (${{ topping.price }})
                  </label>
                </div>
              </div>
              <div class="flex justify-end">
                <button
                  class="bg-gray-5 text-gray-10 py-2 px-4 rounded-md font-bold"
                  @click="addToCart"
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<script setup lang="ts">
import { TOPPINGS } from '~/constants/toppings'
import { type ToppingType } from '~/types/topping-type'

const props = withDefaults(
  defineProps<{
    isActive?: boolean
  }>(),
  {
    isActive: false,
  }
)
const modalVisible = ref(props.isActive || false)
const selectedToppings = ref<ToppingType[]>([])

watch(
  () => props.isActive,
  value => {
    modalVisible.value = value
    selectedToppings.value = []
  }
)

const emit = defineEmits<{
  (e: 'update:isActive', value: boolean): void
  (e: 'addToCart', value: ToppingType[]): void
}>()

function closeModal() {
  emit('update:isActive', false)
}

function addToCart() {
  emit('addToCart', selectedToppings.value)
  closeModal()
}
</script>

<style lang="scss">
.overlay {
  @apply fixed
  flex
  items-center
  justify-center
  inset-0
  z-10;

  &__scrim {
    @apply absolute
    bg-[#3D3D3D]
    opacity-70
    inset-0
    h-full
    w-full
  }
}
</style>
