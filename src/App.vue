<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
</script>

<template>
  <Header style="z-index: 10"></Header>
  <main>
    <RouterView></RouterView>
  </main>
  <Footer></Footer>
</template>

<style>
* {
  margin: 0;
  padding: 0;
}
</style>
