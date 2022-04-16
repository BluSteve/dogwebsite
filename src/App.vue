<template>
  <v-app>
    <v-app-bar app color="primary">
      <router-link to="/browser">
        <v-btn class="mx-1">
          PROJECTS
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
      <router-link :to="inSettings ? '/':'/settings' ">
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
};
</script>
