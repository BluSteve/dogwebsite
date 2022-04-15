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
      <router-link to="/browser">
        <v-btn class="mx-1">
          <v-icon>mdi-magnify</v-icon>
        </v-btn>
      </router-link>
      <v-spacer></v-spacer>
      <router-link to="/login">
        <v-btn class="mx-1">
          LOG IN
        </v-btn>
      </router-link>
      <router-link to="/signup">
        <v-btn class="mx-1">
          SIGN UP
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
};
</script>
