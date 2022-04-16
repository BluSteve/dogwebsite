<template>
  <v-card>
    <v-card-title>
      {{input.ihash.slice(0,8)}}
    </v-card-title>
    <v-card-text>
      {{input.ijson}}
    </v-card-text>
  </v-card>
</template>

<script lang="ts">
export default {
  name: "InputInfo",
  props: ['input'],
}
</script>

<style scoped>

</style>
