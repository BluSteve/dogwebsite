<template>
  <v-tabs>
    <v-tab>Clients</v-tab>
    <v-tab>Admins</v-tab>
  </v-tabs>
</template>

<script lang="ts">

import {getAdmins, getClients, getProjects} from "../types/ProjectController";
import {Client, Project, User} from "../types/OctopiTypes";

export default {
  props: ['pid'],
  name: "ProjectInfo",
  data() {
    return new class {
      project: Project = null;
      clients: Client[] = null;
      admins: User[] = null;
    }();
  },

  async mounted() {
    this.project = (await getProjects()).filter(p => p.pid === this.pid);
    this.clients = await getClients(this.pid);
    this.admins = await getAdmins(this.pid);
  },

  methods: {}
}
</script>
