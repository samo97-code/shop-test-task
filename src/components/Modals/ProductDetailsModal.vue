<template>
  <div v-if="showModal"
       class="overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none justify-center items-center flex"
       ref="componentModalRef" @click.self="emit('close')">
    <div class="relative my-6 mx-auto w-full px-4 sm:px-0 md:w-[700px]">

      <div class="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">

        <i @click="emit('close')"
           class="fas fa-window-close absolute right-3 top-2 text-3xl cursor-pointer z-[1] text-blueGray-500 transition-all duration-200 ease-in-out group-focus-within:text-blue-400"></i>


        <div class="relative px-4 py-6 sm:p-6 flex-auto">
          <div class="flex flex-col sm:flex-row gap-x-6 mt-4">
            <span class="mx-auto min-fit min-w-[300px] h-[300px]">
              <img :src="activeProduct.picture" alt="product-image" class="w-full h-full">
            </span>

            <div class="w-full mt-2 sm:mt-0">
              <h2 class="font-bold text-3xl text-blueGray-600 mb-2">{{ activeProduct.name }}</h2>
              <p class="font-semibold text-xl text-blueGray-500">${{ activeProduct.price }}</p>

              <div class="mt-6 w-full">
                <h4 class="text-blueGray-600">Description</h4>
                <div class="w-full h-[1px] bg-blueGray-300"></div>
                <p class="mt-3 text-blueGray-600 text-sm">{{ activeProduct.description }}</p>
              </div>

              <button
                  class="mt-8 bg-blueGray-800 text-white active:bg-blueGray-600 text-sm font-bold px-3 py-2 rounded shadow hover:shadow-lg outline-none focus:outline-none ease-linear transition-all duration-150"
                  type="button"
              >
                Add to Cart
                <i class="fas fa-shopping-bag cursor-pointer ml-1 text-white transition-all duration-200 ease-in-out group-focus-within:text-blue-400"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div v-if="showModal" class="opacity-25 fixed inset-0 z-40 bg-black"></div>
</template>

<script setup>
import {ref, onMounted, onBeforeUnmount} from "vue";

const emit = defineEmits(['close'])
const props = defineProps({
  showModal: {
    type: Boolean,
    default: false
  },
  activeProduct: {
    type: Object,
    default: () => {
    }
  },
})

//State
const componentModalRef = ref()

//Methods
const handleClick = (e) => {
  if (e.target.innerHTML === props.btnTitle) return false

  if (!componentModalRef.value === e.target) {
    emit('close')
  }
}

onMounted(() => {
  window.addEventListener('click', handleClick)
})
onBeforeUnmount(() => {
  window.removeEventListener('click', handleClick)
})

</script>
