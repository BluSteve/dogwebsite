<template>
  <v-app>
    <v-main>
      <v-layout justify-center>
        <v-flex md3>
          <v-card class="elevation-12">
            <v-toolbar dark color="primary">
              <v-toolbar-title>Signup Form</v-toolbar-title>
            </v-toolbar>
            <v-card-text>
              <form @submit.prevent="uiSignup()">
                <v-text-field
                    v-model="username"
                    label="Username"
                    required
                />
                <v-text-field
                    v-model="email"
                    label="Email"
                    required
                />
                <v-text-field
                    v-model="name"
                    label="Full name"
                />
                <v-text-field
                    type="password"
                    v-model="password"
                    label="Password"
                    required
                />
                <v-checkbox
                    v-model="isAdmin"
                    label="Admin account"
                />
                <v-btn type="submit" color="primary" class="mt-4">Sign Up</v-btn>
              </form>
            </v-card-text>
          </v-card>
        </v-flex>
      </v-layout>
    </v-main>
  </v-app>
</template>

<script lang="ts">
import {signup} from "../types/UserController";
import {UserType} from "../types/OctopiTypes";

export default {
  name: "Login",
  data() {
    return {
      username: "",
      password: "",
      name: "",
      email: "",
      isAdmin: false
    };
  },
  methods: {
    async uiSignup() {
      const status = await signup(this.username, this.password, this.name, this.email,
          this.isAdmin ? UserType.ADMIN : UserType.CLIENT);
      if (status === 200) {
        alert('Sign up successful.');
      }
      else {
        alert('Sign up failed!');
      }
    },
  },
};
</script>
