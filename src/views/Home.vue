<template>
  <v-app>
    <div class="text-center">
      <div class="text-h3 my-4">
        Welcome to Steve's Dog Website!
      </div>
      <div class="text-h6 mb-4">
        The only thing better than dogs is over-engineering a simple website.
      </div>
      <v-layout justify-center>
        <v-img :src="require('@/assets/spaniel.webp')" max-width="300"/>
      </v-layout>
    </div>
  </v-app>
</template>

<script>
export default {
  name: 'Home',
};
</script>
