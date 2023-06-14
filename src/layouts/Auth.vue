<template>
  <div>
    <AuthHeader/>

    <main>
      <section class="relative w-full h-full">
        <div class="absolute top-0 w-full h-full auth-bg bg-no-repeat bg-full"></div>

        <router-view :key="$route.params"/>
      </section>
    </main>

  </div>
</template>

<script setup>
import AuthHeader from "../components/Header/AuthHeader.vue";
</script>
