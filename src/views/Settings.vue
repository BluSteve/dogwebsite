<template>
  <v-app>
    <v-switch v-model="$vuetify.theme.dark" color="orange" label="Dark Mode"
              style="margin: 15px 15px 0 20px; display: block"/>
  </v-app>
</template>

<script>
export default {
  name: "Settings",
}
</script>
