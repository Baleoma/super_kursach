<script setup>
import { ref } from 'vue';
const slimes = ref(null);
fetch('https://f5443215652c2cc0.mokky.dev/slimesdata')
    .then(response => response.json())
    .then(data => slimes.value = data);
</script>

<template>
  <div class="card m-3">
    <h5 class="card-header text-center">Vue 3 fetch data from API</h5>
    <div class="card-body">
      <div v-if="slimes">
        <h5>Products</h5>
        <ul class="mb-0">
          <li
              v-for="slime in slimes" :key="slime.id">{{slime.slimeName}}

          </li>
        </ul>
      </div>
      <div v-if="!slimes" class="text-center">
        <div class="spinner-border spinner-border-sm"></div>
      </div>
    </div>
  </div>
</template>