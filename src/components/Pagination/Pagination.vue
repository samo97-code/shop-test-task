<template>
  <div class="flex">
    <div class="inline-flex gap-x-1 items-center">
      <span
          class="text-sm border border-blueGray-500 bg-blueGray-400 rounded-sm px-1 text-md text-blueGray-600 cursor-pointer"
          :class="{'cursor-not-allowed': !pagination.prev}"
          @click="paginate(pagination.first)">
         <i class="fas fa-chevron-left text-white "></i>
         <i class="fas fa-chevron-left text-white "></i>
      </span>

      <span
          class="text-sm border border-blueGray-500 bg-blueGray-400 rounded-sm px-1 text-md text-blueGray-600 cursor-pointer"
          :class="{'cursor-not-allowed': !pagination.prev}"
          @click="paginate(pagination.prev)">
         <i class="fas fa-chevron-left text-white "></i>
      </span>

      <span class="text-xl text-blueGray-600 font-medium">{{ pagination.current || 1 }}/{{ pagination.total }}</span>

      <span
          class="text-sm border border-blueGray-500 bg-blueGray-400 rounded-sm px-1 text-md text-blueGray-600 cursor-pointer"
          :class="{'cursor-not-allowed': !pagination.next}"
          @click="paginate(pagination.next)">
        <i class="fas fa-chevron-right text-white "></i>
      </span>

      <span
          class="text-sm border border-blueGray-500 bg-blueGray-400 rounded-sm px-1 text-md text-blueGray-600 cursor-pointer"
          :class="{'cursor-not-allowed': !pagination.next}"
          @click="paginate(pagination.last)">
        <i class="fas fa-chevron-right text-white "></i>
        <i class="fas fa-chevron-right text-white "></i>
      </span>
    </div>
  </div>
</template>

<script setup>
const emit = defineEmits(['update:query'])
const props = defineProps({
  query: {
    type: String,
    default: 'page=1'
  },
  pagination: {
    type: Object,
    default: () => {
    }
  },
})


const paginate = (link) => {
  emit('update:query', link.split('?')[1])
}
</script>