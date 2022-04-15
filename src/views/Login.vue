<template>
  <v-app>
    <v-main>
      <v-layout justify-center>
        <v-flex md2>
          <v-card class="elevation-12">
            <v-toolbar dark color="primary">
              <v-toolbar-title>Login Form</v-toolbar-title>
            </v-toolbar>
            <v-card-text>
              <form @submit.prevent="uiLogin()">
                <v-text-field
                    v-model="username"
                    label="Username"
                    required
                />
                <v-text-field
                    type="password"
                    v-model="password"
                    label="Password"
                    required
                />
                <v-btn type="submit" color="primary" class="mt-4">Login</v-btn>
              </form>
            </v-card-text>
          </v-card>
        </v-flex>
      </v-layout>
    </v-main>
  </v-app>
</template>

<script lang="ts">
import {login} from "../types/UserController";

export default {
  name: "Login",
  data() {
    return {
      username: "",
      password: "",
    };
  },
  methods: {
    async uiLogin() {
      const code = await login(this.username, this.password);
      if (code === 0) alert('Log in successful.');
      else if (code === 1) alert('Wrong password!');
      else if (code === 2) alert('User does not exist!');
    },
  },
};
</script>
