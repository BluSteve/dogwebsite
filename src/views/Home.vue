<template>
  <v-app>
    <div class="text-center">
      <div class="text-h3 my-4">
        Welcome to Octopi
      </div>
      <v-layout justify-center>
        <v-img :src="require('@/assets/octopi.png')" max-width="300"/>
      </v-layout>
    </div>
  </v-app>
</template>

<script>
export default {
  name: 'Home',
};
</script>
