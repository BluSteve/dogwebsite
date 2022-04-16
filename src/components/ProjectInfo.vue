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
          <v-container>
            <v-row>
              <v-text-field v-model="search" class="px-4" label="Search"></v-text-field>
              <v-btn v-if=isAdmin color="primary" class="mt-2" @click=addUserD>
                <v-icon>mdi-plus</v-icon>
              </v-btn>
            </v-row>
          </v-container>
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
          <v-container>
            <v-row>
              <v-text-field v-model="runSearch" label="Search" class="px-4"></v-text-field>
              <v-btn v-if=!isAdmin color="primary" class="mt-2" @click=addRunD>
                <v-icon>mdi-plus</v-icon>
              </v-btn>
            </v-row>
            <v-row>
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
            </v-row>
          </v-container>
        </v-card>
      </v-col>
    </v-row>
    <v-dialog v-model=inputDialog>
      <InputDisplay :pid=this.pid></InputDisplay>
    </v-dialog>
    <v-dialog v-model=addRunDialog width=unset>
      <v-card class="pa-4">
        <v-select label="Input" :items=runInputs v-model=inputfield required/>
        <v-select label="Jar" :items=runJars v-model=jarfield required/>
        <v-text-field label="Classpath" v-model=classpathfield required/>
        <v-btn @click=addRun>
          Add
        </v-btn>
      </v-card>
    </v-dialog>
    <v-dialog v-model=addUserDialog width=unset>
      <v-card class="pa-4">
        <v-text-field label="UID" type="number" v-model=adduid required/>
        <v-btn @click=addUser>
          Add
        </v-btn>
      </v-card>
    </v-dialog>
  </v-container>
</template>

<script lang="ts">

import {associate, getAdmins, getClients, getProjects} from "../types/ProjectController";
import {addRun, getRuns} from "../types/RunController";
import InputDisplay from "./InputDisplay.vue";
import {store} from "../types/OctopiTypes";
import {getInputs} from "../types/InputController";
import {getJars} from "../types/JarController";

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
      isAdmin: store.isAdmin,
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
      inputDialog: false,
      addRunDialog: false,
      addUserDialog: false,
      runInputs: [],
      runInputsActual: [],
      runJarsActual: [],
      runJars: [],
      classpathfield: '',
      inputfield: '',
      jarfield: '',
      adduid: null
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
    },
    addUserD() {
      this.addUserDialog = true;
    },
    async addUser() {
      if (await associate(this.adduid, this.pid) === 200) alert("User added!");
    },
    async addRunD() {
      this.addRunDialog = true;
      this.runInputsActual = await getInputs(this.pid);
      this.runInputs = this.runInputsActual.map(i => i.ihash.slice(0, 8));
      this.runJarsActual = await getJars(this.pid);
      this.runJars = this.runJarsActual.map(j => j.jpid + ": " + j.jhash.slice(0, 8));
    },
    async addRun() {
      const runIndex = this.runJars.indexOf(this.jarfield);
      const inputIndex = this.runInputs.indexOf(this.inputfield);
      if (await addRun(this.pid, this.runInputsActual[inputIndex].ihash, this.runJarsActual[runIndex].jpid,
          this.runJarsActual[runIndex].jhash, this.classpathfield) === 200) alert("Run added!");
    }
  }
}
</script>
