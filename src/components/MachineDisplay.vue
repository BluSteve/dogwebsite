<template>
  <v-container class=mt-4>
    <v-row justify='center'>
      <v-col>
        <h2>Machines</h2>
        <v-data-table :headers=headers :items=machines class="elevation-1" @click:row="handleClick">
          <template v-slot:item.jhash="{item}">
            {{ item.jhash = item.jhash ? item.jhash.slice(0, 8) : null }}
          </template>
        </v-data-table>
      </v-col>
      <v-col>
        <h2>Active Machines</h2>
        <v-data-table :headers=activeHeaders :items=activeMachines class="elevation-1" @click:row="handleClick">
        </v-data-table>
      </v-col>
    </v-row>
    <v-dialog v-model="machineDialog" width="unset">
      <v-container class="pa-4">
        <v-row class="justify-end">
          <v-btn class="mx-2" v-on:click="deleteFromProj" color="orange">Delete From Project</v-btn>
        </v-row>
      </v-container>
    </v-dialog>
  </v-container>
</template>

<script lang='ts'>

import {deleteFromProject, getMachines} from "../types/MachineController";
import {store} from "../types/OctopiTypes";
import {getIsAdmin} from "../types/UserController";

export default {
  name: "MachineDisplay",
  props: ['pid'],
  data: () => ({
    machines: [],
    activeMachines: [],
    selectedMachine: null,
    machineDialog: false,
    isAdmin: false,
    headers: [{text: 'MID', value: 'mid'},
      {text: 'Machine Name', value: 'mname'},
      {text: 'Cores', value: 'cores'},
      {text: 'Date Connected', value: 'cdate'},
      {text: 'Cached Jar PID', value: 'jpid'},
      {text: 'Cached Jar Hash', value: 'jhash'}
    ],
    activeHeaders: [
      {text: 'Machine Name', value: 'mname'},
      {text: 'IP Address', value: 'ip'},
      {text: 'Country', value: 'ccode'},
      {text: 'Region', value: 'region'},
      {text: 'City', value: 'city'},
      {text: 'Latitude', value: 'latitude'},
      {text: 'Longitude', value: 'longitude'},

    ]
  }),
  async mounted() {
    this.machines = await getMachines(this.pid);
    this.isAdmin = await getIsAdmin();
    this.activeMachines = await getMachines(this.pid, true);
  },
  methods: {
    handleClick(item) {
      this.selectedMachine = item;
      if (this.isAdmin) this.machineDialog = true;
    },
    async deleteFromProj() {
      await deleteFromProject(this.pid, this.selectedMachine.mname);
      this.machineDialog = false;
    }
  }
}
</script>

<style scoped>

</style>
