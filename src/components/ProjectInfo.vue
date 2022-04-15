<template>
  <v-container class="mt-4">
    <v-row>
      <v-col cols="6">
        <v-card>
          <v-tabs v-model="tab">
            <v-tab href="#client-tab">Clients</v-tab>
            <v-tab href="#admin-tab">Admins</v-tab>
          </v-tabs>
          <v-tabs-items v-model="tab">
            <v-tab-item value="client-tab">
              <v-data-table :items=clients :headers=clientHeaders>

              </v-data-table>
            </v-tab-item>
            <v-tab-item value="admin-tab">
              <v-data-table :items=admins :headers=adminHeaders>

              </v-data-table>
            </v-tab-item>
          </v-tabs-items>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">

import {getAdmins, getClients, getProjects} from "../types/ProjectController";

export default {
  props: ['pid'],
  name: "ProjectInfo",

  data() {
    const userHeaders = [
          {text: 'UID', value: 'uid'},
          {text: 'Username', value: 'username'},
          {text: 'Full name', value: 'name'},
          {text: 'Email', value: 'email'}
        ];
    return {
      project: null,
      clients: [],
      clientHeaders: userHeaders.concat({text: 'Hours used', value: 'hours_used'}),
      admins: [],
      adminHeaders: userHeaders,
      tab: null
    }
  },

  async mounted() {
    this.project = (await getProjects()).filter(p => p.pid === this.pid);
    this.clients = await getClients(this.pid);
    this.admins = await getAdmins(this.pid);
  },

  methods: {}
}
</script>
