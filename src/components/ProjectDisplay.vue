<template>
  <v-container class="mt-4">
    <v-row justify='center'>
      <v-data-table :headers=headers :items=projects class="elevation-1"
                    @click:row="handleClick">
      </v-data-table>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import {getProjects} from "../types/ProjectController";
import {Project} from "../types/OctopiTypes";

export default {
  name: 'ProjectDisplay',

  data: () => ({
    projects: [],
    headers: [{text: 'PID', value: 'pid'},
      {text: 'Name', value: 'pname'},
      {text: 'Date Created', value: 'cdate'}]
  }),

  async mounted() {
    this.projects = await getProjects();
  },

  methods: {
    handleClick(item) {
      this.$router.push({name: 'project', params: {pid: item.pid}});
    }
  }
}
</script>
