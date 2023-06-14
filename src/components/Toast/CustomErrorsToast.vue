<template>
  <div class="custom-toast">
    <h2>{{ message }}</h2>
    <div v-html="content"></div>
  </div>

</template>

<script setup>
const props = defineProps({
  content: {
    type: String,
    default: ''
  },
  message: {
    type: String,
    default: ''
  },
})
</script>

