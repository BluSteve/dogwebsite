<template>
  <v-card>
    <v-container>
      <v-row>
        <v-col v-for='item in inputs' :key='item.ihash'>
          <InputInfo :input='item'/>
        </v-col>
      </v-row>
      <v-row>
        <v-col align="right">
          <v-file-input @change="addInput" accept=".json" label="Upload input JSON">

          </v-file-input>
        </v-col>
      </v-row>
    </v-container>
  </v-card>
</template>

<script lang="ts">

import {getInputs, uploadInput} from "../types/InputController";
import InputInfo from "./InputInfo.vue";

export default {
  name: "InputDisplay",
  components: {InputInfo},
  props: ['pid'],
  data() {
    return {
      inputs: [],
    }
  },
  async mounted() {
    this.inputs = await getInputs(this.pid);
    console.log(this.inputs);
  },
  methods: {
    addInput(file) {
      let fileReader = new FileReader();
      fileReader.onload = event => {
        let data = event.target.result;
        uploadInput(this.pid, data).then(status => console.log(status));
        console.log(data);
      }
      fileReader.readAsText(file);
    }
  }
}
</script>

<style scoped>

</style>
