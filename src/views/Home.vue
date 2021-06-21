<template>
  <v-app>
    <DogDisplay/>
  </v-app>
</template>

<script>
import DogDisplay from '@/components/DogDisplay';

export default {
  name: 'Home',

  components: {
    DogDisplay,
  },
};
</script>
