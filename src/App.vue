<template>
  <v-app>
    <v-app-bar
        app
        color="primary"
    >
      <div class="d-flex align-center">
        <router-link to="/">
          <v-img
              class="shrink mr-2"
              contain
              src="https://www.telegraph.co.uk/content/dam/technology/2021/01/28/Screenshot-2021-01-28-at-13-20-35_trans_NvBQzQNjv4BqEGKV9LrAqQtLUTT1Z0gJNRFI0o2dlzyIcL3Nvd0Rwgc.png"
              width="70"
          />
        </router-link>
      </div>
      <v-spacer></v-spacer>
      <router-link :to="inSettings ? '/' : '/settings'">
        <v-btn @click="inSettings = !inSettings" class="mx-1">
          <v-icon>mdi-cog-outline</v-icon>
        </v-btn>
      </router-link>
    </v-app-bar>
    <br>
    <v-main><router-view/></v-main>
  </v-app>
</template>

<script>

export default {
  name: 'App',
  data: () => ({
    inSettings: false
  }),
};
</script>
