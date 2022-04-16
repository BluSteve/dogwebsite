<template>
  <v-container class="mt-4">
    <v-row>
      <h2>{{ project.pname }}</h2>
      <v-spacer/>
      <v-btn class="mx-1" color="primary" v-on:click="inputDialog = true">Inputs</v-btn>
      <v-btn class="mx-1" color="primary" v-on:click="goToJars">Jars</v-btn>
      <v-btn class="mx-1" color="primary">Machines</v-btn>
    </v-row>
    <v-row class="mt-8">
      <v-col cols="6">
        <v-card class="px-2">
          <v-text-field v-model="search" class="px-4" label="Search"></v-text-field>
          <v-tabs v-model="tab">
            <v-tab href="#client-tab">Clients</v-tab>
            <v-tab href="#admin-tab">Admins</v-tab>
          </v-tabs>
          <v-tabs-items v-model="tab">
            <v-tab-item value="client-tab">
              <v-data-table :items=clients :headers=clientHeaders :loading=acLoading :search=search>

              </v-data-table>
            </v-tab-item>
            <v-tab-item value="admin-tab">
              <v-data-table :items=admins :headers=adminHeaders :loading=acLoading :search=search>

              </v-data-table>
            </v-tab-item>
          </v-tabs-items>
        </v-card>
      </v-col>
      <v-col>
        <v-card class="px-2">
          <v-text-field v-model="runSearch" class="px-4" label="Search"></v-text-field>
          <v-data-table :items=runs :headers=runHeaders :search=runSearch>
            <template v-slot:item.ihash="{item}">
              {{ item.ihash = item.ihash.slice(0, 8) }}
            </template>
            <template v-slot:item.jhash="{item}">
              {{ item.jhash = item.jhash.slice(0, 8) }}
            </template>
            <template v-slot:item.startRun="{item}">
              <v-btn v-on:click="startRun(item)">
                <v-icon>mdi-play</v-icon>
              </v-btn>
            </template>
          </v-data-table>
        </v-card>
      </v-col>
    </v-row>
    <v-dialog v-model=inputDialog>
      <InputDisplay :pid=this.pid></InputDisplay>
    </v-dialog>
  </v-container>
</template>

<script lang="ts">

import {getAdmins, getClients, getProjects} from "../types/ProjectController";
import {getRuns} from "../types/RunController";
import InputDisplay from "./InputDisplay.vue";

export default {
  components: {InputDisplay},
  props: ['pid'],
  name: "ProjectInfo",

  data() {
    const userHeaders = [
      {text: 'UID', value: 'uid'},
      {text: 'Username', value: 'username'},
      {text: 'Full Name', value: 'name'},
      {text: 'Email', value: 'email'}
    ];
    return {
      search: '',
      runSearch: '',
      project: null,
      runs: [],
      runHeaders: [
        {text: 'Run ID', value: 'rid'},
        {text: 'Input Hash', value: 'ihash'},
        {text: 'Jar PID', value: 'jpid'},
        {text: 'Jar Hash', value: 'jhash'},
        {text: 'Created By', value: 'uid'},
        {text: 'Classpath', value: 'classpath'},
        {text: 'Output Hash', value: 'ohash'},
        {text: 'Output JSON', value: 'ojson'},
        {text: 'Start Run', value: 'startRun'}
      ],
      clients: [],
      clientHeaders: userHeaders.concat({text: 'Hours used', value: 'hours_used'}),
      admins: [],
      adminHeaders: userHeaders,
      acLoading: false,
      tab: null,
      inputDialog: false
    }
  },

  async mounted() {
    this.project = (await getProjects(this.pid))[0];
    this.runs = await getRuns(this.pid);

    this.acLoading = true;
    this.clients = await getClients(this.pid);
    this.admins = await getAdmins(this.pid);
    this.acLoading = false;
  },

  methods: {
    startRun(item) {

    },
    goToJars() {
      this.$router.push({name: 'jars', params: {pid: this.pid}});
    }
  }
}
</script>
