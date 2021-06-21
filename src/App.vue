<template>
  <v-app>
    <v-app-bar app color="primary">
      <div class="d-flex align-center">
        <router-link to="/">
          <v-img
              class="shrink mr-2"
              contain
              :src="require('@/assets/doge.jpg')"
              width="70"
          />
        </router-link>
      </div>
      <v-spacer></v-spacer>
      <router-link :to="inSettings ? '/' : '/settings'">
        <v-btn class="mx-1" @click="inSettings = !inSettings">
          <v-icon>mdi-cog-outline</v-icon>
        </v-btn>
      </router-link>
    </v-app-bar>
    <br>
    <v-main>
      <router-view/>
    </v-main>
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
