<template>
  <div>
    <Header/>

    <main>
      <section class="relative w-full h-full py-12 sm:py-20 min-h-screen-c">
        <router-view :key="$route.params"/>
      </section>
    </main>

  </div>
</template>

<script setup>
import Header from "../components/Header/Header.vue";
</script>
