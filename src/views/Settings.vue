<template>
  <v-app>
      <v-switch v-model="$vuetify.theme.dark" label="Dark Mode" color="orange"
                style="margin: 15px 15px 15px 20px; display: block"></v-switch>
  </v-app>
</template>

<script>
export default {
  name: "Settings",
}
</script>
