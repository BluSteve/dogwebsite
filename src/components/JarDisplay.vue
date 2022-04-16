<template>
  <v-container class=mt-4>
    <v-row justify='center'>
      <v-data-table :headers=headers :items=jars class="elevation-1"
                    @click:row="handleClick">
        <template v-slot:item.ispublic="{item}">
          <v-checkbox v-model="item.ispublic" @change="togglePublic(item)"></v-checkbox>
        </template>
      </v-data-table>
    </v-row>
    <v-row justify='center'>
      <v-file-input style="maxWidth: 700px" @change="addJar" accept=".jar" label="Upload Jar"/>
      <v-checkbox class="ml-4"  label="Public" v-model=uploadJarPublic></v-checkbox>
    </v-row>
    <v-dialog v-model=jarDialog width="unset">
      <v-container class="pa-4">
        <v-row class="justify-end">
          <v-btn class="mx-2" v-on:click="deleteFromProj" color="orange">Delete From Project</v-btn>
          <v-btn class="mx-2" v-on:click="deleteLegit" color="red">Delete</v-btn>
        </v-row>
      </v-container>
    </v-dialog>
  </v-container>
</template>

<script lang='ts'>

import {deleteFromProject, deleteLegit, getJars, togglePublic, uploadJar} from "../types/JarController";

export default {
  name: "JarDisplay",
  props: ['pid'],
  data: () => ({
    jars: [],
    selectedJar: null,
    jarDialog: false,
    uploadJarPublic: false,
    headers: [{text: 'Jar PID', value: 'jpid'},
      {text: 'Jar Hash', value: 'jhash'},
      {text: 'Date Uploaded', value: 'udate'},
      {text: 'Is Public?', value: 'ispublic'}
    ]
  }),
  async mounted() {
    this.jars = await getJars(this.pid);
  },
  methods: {
    handleClick(item) {
      this.selectedJar = {"jpid": item.jpid, "jhash": item.jhash};
      this.jarDialog = true;
    },
    async deleteFromProj() {
      await deleteFromProject(this.pid, this.selectedJar.jpid, this.selectedJar.jhash);
      this.jarDialog = false;
    },
    async deleteLegit() {
      await deleteLegit(this.selectedJar.jpid, this.selectedJar.jhash);
      this.jarDialog = false;
    },
    async togglePublic(item) {
      await togglePublic(item.jpid, item.jhash);
      this.jarDialog = false;
    },
    addJar(file) {
      let fileReader = new FileReader();
      fileReader.onload = event => {
        let data = event.target.result;
        if (typeof data === "string") {
          uploadJar(this.pid, data.split(",")[1], this.uploadJarPublic).then(status => console.log(status));
        }
        console.log(data);
      }
      fileReader.readAsDataURL(file);
    }
  }
}
</script>

<style scoped>

</style>
