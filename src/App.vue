<template>
  <v-app>
    <v-app-bar
        app
        color="primary"
    >
      <div class="d-flex align-center">
        <a href="https://www.thedogapi.com/">
          <v-img
              class="shrink mr-2"
              contain
              src="https://www.telegraph.co.uk/content/dam/technology/2021/01/28/Screenshot-2021-01-28-at-13-20-35_trans_NvBQzQNjv4BqEGKV9LrAqQtLUTT1Z0gJNRFI0o2dlzyIcL3Nvd0Rwgc.png"
              transition="scale-transition"
              width="70"
          />
        </a>
      </div>

      <v-spacer></v-spacer>
    </v-app-bar>

    <v-main>
      <HelloWorld/>
    </v-main>
  </v-app>
</template>

<script>
import HelloWorld from './components/DogDisplay';

export default {
  name: 'App',

  components: {
    HelloWorld,
  },

  data: () => ({
    //
  }),
};
</script>
